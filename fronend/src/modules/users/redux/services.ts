import { Api } from "../../base";
import { URL_API } from "../../common";

export const apiGetUsers = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/users`, params);
};

export const apiAddPermision = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/users/add-permisions`, params);
};

export const apiDeletePermision = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/users/delete-permisions`, params);
};
