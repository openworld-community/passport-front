export type BaseResponse<T = object> = T & {
  message?: string;
};
