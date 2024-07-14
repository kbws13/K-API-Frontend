import { getInterfaceByIdUsingGet, invokeInterfaceUsingPost } from '@/services/backend/interfaceInfoController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { useParams } from '@umijs/max';
import { Button, Card, Descriptions, Divider, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';

/**
 * 接口信息页面
 *
 * @constructor
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isInvoke, setIsInvoke] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>();
  const params = useParams();
  const [invokeRes, setInvokeRes] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);

  const loadData = async() => {
    if(!params.id) {
      message.error("参数不存在");
      return;
    }
    setLoading(true);
    try {
      const res = await getInterfaceByIdUsingGet({
        id: params.id
      })
      setData(res.data)
    }catch(error: any) {
      message.error("请求失败", error.message);
    }
    setLoading(false);
  } 

  const onFinish = async (values: any) => {
    if (!params.id) {
      message.error('接口不存在');
      return;
    }
    setInvokeLoading(true);
    try {
      const res = await invokeInterfaceUsingPost({
        id: params.id,
        ...values,
      });
      setInvokeRes(res.data);
      message.success('请求成功');
    } catch (error: any) {
      message.error('操作失败，' + error.message);
    }
    setInvokeLoading(false);
  };

  const startInvoke = () => {
    setIsInvoke(!isInvoke)
  }


  useEffect(() => {
    loadData()
  }, []);
  return (
    <PageContainer title="接口文档" loading={loading}>
      <Card>
        {data ? (
            <Descriptions title={data.name} column={1} extra={<Button onClick={startInvoke}>在线调用</Button>}>
              <Descriptions.Item label="接口状态">{data.status ? '开启' : '关闭'}</Descriptions.Item>
              <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
              <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
              <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
              <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
              <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
              <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
              <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
              <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
            </Descriptions>
          ) : (
            <>接口不存在</>
          )}
      </Card>
      <Divider />
      {isInvoke && (
        <>
        <Card>
        <Form name='invoke' onFinish={onFinish} layout='vertical'>
          <Form.Item label="请求参数" name="userRequestParams">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16}}>
            <Button type='primary' htmlType='submit'>
              发送
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Card title="返回结果" loading={invokeLoading}>
        {invokeRes}
      </Card>
      </>
      )}
    </PageContainer>
  );
};
export default Index;
