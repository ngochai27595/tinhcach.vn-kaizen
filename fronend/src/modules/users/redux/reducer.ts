import { ReducerRegistry, TAction } from "../../base";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  users: { data: [], total: 0, page: 1, loading: true },
};

ReducerRegistry.register("users", (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        users: {
          ...state.users,
          data: state.users.data.map((u: any) =>
            u.id === action.data.id ? { ...u, ...action.data } : u
          ),
        },
      };
    case ACTION_TYPES.SET_USERS:
      return { ...state, users: { ...action.data } };
    default:
      return state;
  }
});
