import {getError, setIsLogin, setRememberMe} from "./loginReducer";


export enum LogEnum {
  IS_LOGIN = 'AUTH/IS_LOGIN',
  SET_REMEMBER_ME = 'AUTH/REMEMBER_ME',
  GET_ERROR = 'AUTH/ERROR',
}

export type ActionType =
  ReturnType<typeof setIsLogin>
  | ReturnType<typeof setRememberMe>
  | ReturnType<typeof getError>





