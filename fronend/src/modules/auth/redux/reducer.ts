import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  token: null,
};

ReducerRegistry.register("auth", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_INFO:
      return { ...state, token: action.data.token, auth: { ...action.data } };
    default:
      return state;
  }
});
