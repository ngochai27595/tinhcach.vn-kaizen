import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  reports: { all: [] },
};

ReducerRegistry.register("pdfs", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_REPORTS:
      return { ...state, reports: { ...state.reports, ...action.data } };
    default:
      return state;
  }
});
