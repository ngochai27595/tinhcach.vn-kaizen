import { Api } from "../../base";
import { URL_API } from "../../common";

export const apiGetUserInfo = (params: any): Promise<any> => {
  return Api.get(
    `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${params}`,
    {}
  );
};

export const apiLogin = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/auth/login-google`, params);
};
