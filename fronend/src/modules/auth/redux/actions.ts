import { ACTION_TYPES } from "./actionTypes";

export const getUserInfo = (credential: string) => {
  return {
    type: ACTION_TYPES.GET_USER_INFO,
    data: credential,
  };
};

export const submitLogin = (u: string, p: string) => {
  return {
    type: ACTION_TYPES.SUBMIT_LOGIN,
    u,
    p,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const setUserInfo = (data: any) => {
  return {
    type: ACTION_TYPES.SET_USER_INFO,
    data,
  };
};
