import { Api } from "../../base";
import { URL_API } from "../../common";

export const apiGetClasses = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/classes`, params);
};

export const apiGetReportTeachers = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/classes/report-teacher`, params);
};

export const apiGetReportStudents = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/classes/report-student`, params);
};

export const apiAddClass = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/classes`, params);
};

export const apiDeleteClass = (id: any, type: number): Promise<any> => {
  return Api.delete(`${URL_API}/classes/${id}`, { type });
};

export const apiUpdateClass = (params: any): Promise<any> => {
  return Api.put(`${URL_API}/classes/${params.id}`, params);
};

export const apiGetOptions = (): Promise<any> => {
  return Api.get(`${URL_API}/classes/options`, {});
};

export const apiGetTransactions = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/classes/transactions`, params);
};

export const apiUpdateTransaction = (params: any): Promise<any> => {
  return Api.put(`${URL_API}/classes/transactions/${params.id}`, params);
};

export const apiAddTransaction = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/classes/transactions`, params);
};

export const apiGetReportTransactions = (): Promise<any> => {
  return Api.get(`${URL_API}/classes/report-transactions`, {});
};
