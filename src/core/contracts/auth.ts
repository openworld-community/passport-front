import { BaseResponse } from './common';

export type TokenData = {
  access_token: string;
  /**
   * time in s
   */
  expires_in: number;
  /**
   * time in s
   */
  refresh_expires_in: number;
  refresh_token: string;
  token_type: 'Bearer';
  session_state: string;
  /**
   * format: 'email profile'
   */
  scope: string;
};

export type LoginResponse = BaseResponse<{
  token: TokenData;
}>;

export type LoginRequest = {
  login: string;
  password: string;
};
