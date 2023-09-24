import { Api } from "../../base";
import { URL_API } from "../../common";

export const apiGetLabels = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/v2/reviews/labels`, params);
};

export const apiAddLabel = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/v2/reviews/labels`, params);
};

export const apiUpdateLabel = (params: any): Promise<any> => {
  return Api.put(`${URL_API}/v2/reviews/labels/${params.id}`, params);
};
