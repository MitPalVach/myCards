import {LogEnum} from "./logTypes";


export const setIsLogin = (isLogin: boolean) => ({type: LogEnum.IS_LOGIN, payload: {isLogin}} as const)
export const setRememberMe = (value: boolean) => ({type: LogEnum.SET_REMEMBER_ME, payload: {value}} as const)
export const getError = (error: string) => ({type: LogEnum.GET_ERROR, payload: {error}} as const)

// thunk






