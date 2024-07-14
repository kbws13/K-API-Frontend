// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /api/interfaceInfo/add */
export async function addInterfaceUsingPost(
  body: API.InterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/interfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /api/interfaceInfo/delete */
export async function deleteInterfaceUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/interfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id查询 GET /api/interfaceInfo/get/${param0} */
export async function getInterfaceByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseInterfaceInfo_>(`/api/interfaceInfo/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询 POST /api/interfaceInfo/list */
export async function listInterfaceUsingPost(
  body: API.InterfaceInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageInterfaceInfo_>('/api/interfaceInfo/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下线接口 POST /api/interfaceInfo/offline */
export async function offlineInterfaceUsingPost(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceInfo/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发布接口 POST /api/interfaceInfo/online */
export async function onlineInterfaceUsingPost(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/interfaceInfo/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新 POST /api/interfaceInfo/update */
export async function updateInterfaceUsingPost(
  body: API.InterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/interfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
