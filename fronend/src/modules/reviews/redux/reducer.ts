import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  reviews: { data: [], total: 0, page: 1, loading: true },
  review: { loading: null },
  options: {},
  reviewLabel: [],
  reports: {
    reviews: [],
    comments: [],
    commentTotals: [],
    rateTotals: [],
    rates: [],
    rateByOSAndStatusTotals: [],
    labels: [],
    createrLabels: [],
    labelByDateCreateReview: [],
  },
};

ReducerRegistry.register("reviews", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_OPTIONS:
      return { ...state, options: action.data };
    case ACTION_TYPES.SET_REVIEWS:
      return { ...state, reviews: { ...action.data } };
    case ACTION_TYPES.SET_REVIEW:
      return { ...state, review: { ...action.data } };
    case ACTION_TYPES.SET_REVIEW_LABEL:
      return { ...state, reviewLabel: action.data };
    case ACTION_TYPES.SET_REPORTS:
      return { ...state, reports: { ...state.reports, ...action.data } };
    case ACTION_TYPES.SET_LABEL_REPORTS:
      return { ...state, reports: { ...state.reports, labels: action.data } };
    default:
      return state;
  }
});
