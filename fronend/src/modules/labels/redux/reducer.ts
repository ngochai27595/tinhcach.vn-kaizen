import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  labels: { data: [], total: 0, page: 1, loading: true },
};

ReducerRegistry.register("labels", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LABELS:
      return { ...state, labels: { ...action.data } };
    default:
      return state;
  }
});
