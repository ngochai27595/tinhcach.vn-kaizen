import ReducerRegistry from "./ReducerRegistry";
import { TAction } from "../types/redux";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  id: 1,
  sidebarShow: false,
};

ReducerRegistry.register("base", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SIDEBAR:
      return { ...state, sidebarShow: !state.sidebarShow };
    default:
      return state;
  }
});
