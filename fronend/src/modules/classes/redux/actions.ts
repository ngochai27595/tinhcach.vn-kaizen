import { ACTION_TYPES } from "./actionTypes";

export const getClasses = (
  page: number,
  filters: any,
  size?: number,
  localFilters?: any
) => {
  return {
    type: ACTION_TYPES.GET_CLASSES,
    data: page,
    filters,
    size,
    localFilters,
  };
};

export const setClasses = (data: any) => {
  return {
    type: ACTION_TYPES.SET_CLASSES,
    data,
  };
};

export const addClass = (data: any, cbAddClass: any) => {
  return {
    type: ACTION_TYPES.ADD_CLASS,
    data,
    cbAddClass,
  };
};

export const deleteClass = (
  id: any,
  typeDelete: number,
  cbDeleteClass: any
) => {
  return {
    type: ACTION_TYPES.DELETE_CLASS,
    id,
    typeDelete,
    cbDeleteClass,
  };
};

export const updateClass = (data: any, cbAddClass: any) => {
  return {
    type: ACTION_TYPES.UPDATE_CLASS,
    data,
    cbAddClass,
  };
};

export const getReportTeachers = (
  page: number,
  filters: any,
  size?: number,
  localFilters?: any
) => {
  return {
    type: ACTION_TYPES.GET_TEACHER_REPORT,
    data: page,
    filters,
    size,
    localFilters,
  };
};

export const setReportTeachers = (data: any) => {
  return {
    type: ACTION_TYPES.SET_TEACHER_REPORT,
    data,
  };
};

export const getOptions = () => {
  return {
    type: ACTION_TYPES.GET_OPTIONS,
  };
};

export const setOptions = (data: any) => {
  return {
    type: ACTION_TYPES.SET_OPTIONS,
    data,
  };
};

export const getReportStudents = (
  page: number,
  filters: any,
  size?: number,
  localFilters?: any
) => {
  return {
    type: ACTION_TYPES.GET_STUDENT_REPORT,
    data: page,
    filters,
    size,
    localFilters,
  };
};

export const setReportStudents = (data: any) => {
  return {
    type: ACTION_TYPES.SET_STUDENT_REPORT,
    data,
  };
};

export const getTransactions = (
  page: number,
  filters: any,
  size?: number,
  localFilters?: any
) => {
  return {
    type: ACTION_TYPES.GET_TRANSACTIONS,
    data: page,
    filters,
    size,
    localFilters,
  };
};

export const setTransactions = (data: any) => {
  return {
    type: ACTION_TYPES.SET_TRANSACTIONS,
    data,
  };
};

export const updateTransaction = (
  data: any,
  cbUpdateTransaction: any,
  localFilters: any
) => {
  return {
    type: ACTION_TYPES.UPDATE_TRANSACTION,
    data,
    cbUpdateTransaction,
    localFilters,
  };
};

export const addTransaction = (data: any) => {
  return {
    type: ACTION_TYPES.ADD_TRANSACTION,
    data,
  };
};

export const getReportTransactions = () => {
  return {
    type: ACTION_TYPES.GET_REPORT_TRANSACTIONS,
  };
};

export const setReportTransactions = (data: any) => {
  return {
    type: ACTION_TYPES.SET_REPORT_TRANSACTIONS,
    data,
  };
};
