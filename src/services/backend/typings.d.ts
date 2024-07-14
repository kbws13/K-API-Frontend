declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfo_ = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo_ = {
    code?: number;
    data?: PageInterfaceInfo_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: string;
  };

  type getInterfaceByIdUsingGETParams = {
    /** id */
    id: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type IdRequest = {
    id?: string;
  };

  type InterfaceInfo = {
    createTime?: string;
    description?: string;
    id?: string;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: string;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    responseHeader?: string;
    url?: string;
  };

  type InterfaceInfoQueryRequest = {
    current?: number;
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    requestHeader?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: string;
  };

  type InterfaceInfoUpdateRequest = {
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: string;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfo_ = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: string;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: User[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: UserVO[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: string;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
