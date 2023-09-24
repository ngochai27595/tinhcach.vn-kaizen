import { ACTION_TYPES } from "./actionTypes";

export const getPdfReport = (params: any) => {
  return {
    type: ACTION_TYPES.GET_REPORTS,
    params,
  };
};

export const setPdfReport = (data: any) => {
  return {
    type: ACTION_TYPES.SET_REPORTS,
    data,
  };
};
