import { Api } from "../../base";
import { URL_API } from "../../common";

export const apiGetReviews = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/reviews`, params);
};

export const apiGetReview = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/reviews/${params}`, {});
};

export const apiPostComment = (params: any): Promise<any> => {
  return Api.post(`${URL_API}/v2/reviews/reply/${params.id}`, params);
};

export const apiGetOptions = (): Promise<any> => {
  return Api.get(`${URL_API}/reviews/options`, {});
};

export const apiPostReviewLabel = (params: any): Promise<any> => {
  return Api.put(`${URL_API}/v2/reviews/${params.id}/labels`, params);
};

export const apiGetReviewLabel = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/v2/reviews/${params}/labels`, {});
};

export const apiGetReports = (): Promise<any> => {
  return Api.get(`${URL_API}/v2/reviews/reports`, {});
};

export const apiGetLabelReports = (params: any): Promise<any> => {
  return Api.get(`${URL_API}/v2/reviews/reports/label`, params);
};
