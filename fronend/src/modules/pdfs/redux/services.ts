import { Api } from "../../base";
import { URL_API } from "../../common";

export const apiGetPdfReports = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/v2/pdfs/report`, params);
};

export const apiCountPdfByCreatedAt = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/v2/pdfs/reportByDate`, params);
};

export const apiCountPdfByCreatedAtV2 = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/v2/pdfs/countByDate`, params);
};
