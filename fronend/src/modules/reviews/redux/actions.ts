import { ACTION_TYPES } from "./actionTypes";

export const getReviews = (
  page: number,
  filters: any,
  size?: number,
  q?: any
) => {
  return {
    type: ACTION_TYPES.GET_REVIEWS,
    data: page,
    filters,
    size,
    q,
  };
};

export const setReviews = (data: any) => {
  return {
    type: ACTION_TYPES.SET_REVIEWS,
    data,
  };
};

export const getReview = (reviewId: string) => {
  return {
    type: ACTION_TYPES.GET_REVIEW,
    data: reviewId,
  };
};

export const setReview = (data: any) => {
  return {
    type: ACTION_TYPES.SET_REVIEW,
    data,
  };
};

export const replyComment = (data: any) => {
  return {
    type: ACTION_TYPES.REPLY_COMMENT,
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

export const updateReviews = (data: any, reviewId: any) => {
  return {
    type: ACTION_TYPES.UPDATE_REVIEWS,
    data,
    reviewId,
  };
};

export const updateReviewLabel = (data: any) => {
  return {
    type: ACTION_TYPES.UPDATE_REVIEW_LABEL,
    data,
  };
};

export const getReviewLabel = (reviewId: string) => {
  return {
    type: ACTION_TYPES.GET_REVIEW_LABEL,
    data: reviewId,
  };
};

export const setReviewLabel = (data: any) => {
  return {
    type: ACTION_TYPES.SET_REVIEW_LABEL,
    data,
  };
};

export const getReports = () => {
  return {
    type: ACTION_TYPES.GET_REPORTS,
  };
};

export const setReports = (data: any) => {
  return {
    type: ACTION_TYPES.SET_REPORTS,
    data,
  };
};

export const getLabelReports = (params: any) => {
  return {
    type: ACTION_TYPES.GET_LABEL_REPORTS,
    params,
  };
};

export const setLabelReports = (data: any) => {
  return {
    type: ACTION_TYPES.SET_LABEL_REPORTS,
    data,
  };
};
