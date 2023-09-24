import { ACTION_TYPES } from "./actionTypes";

export const getUsers = (page: number, filters: any, size?: number) => {
  return {
    type: ACTION_TYPES.GET_USERS,
    data: page,
    filters,
    size,
  };
};

export const setUsers = (data: any) => {
  return {
    type: ACTION_TYPES.SET_USERS,
    data,
  };
};

export const addPermision = (data: any) => {
  return {
    type: ACTION_TYPES.ADD_PERMISION,
    data,
  };
};

export const deletePermision = (data: any) => {
  return {
    type: ACTION_TYPES.DELETE_PERMISION,
    data,
  };
};

export const setUser = (data: any) => {
  return {
    type: ACTION_TYPES.SET_USER,
    data,
  };
};
