import { ACTION_TYPES } from "./actionTypes";

export const getLabels = (page: number, filters: any, size?: number) => {
  return {
    type: ACTION_TYPES.GET_LABELS,
    data: page,
    filters,
    size,
  };
};

export const setLabels = (data: any) => {
  return {
    type: ACTION_TYPES.SET_LABELS,
    data,
  };
};

export const addLabel = (data: any) => {
  return {
    type: ACTION_TYPES.ADD_LABEL,
    data,
  };
};

export const updateLabel = (data: any) => {
  return {
    type: ACTION_TYPES.UPDATE_LABEL,
    data,
  };
};
