/* eslint-disable init-declarations */
/* eslint-disable max-depth */
/* eslint-disable complexity */
import MiddlewareRegistry from "./MiddlewareRegistry";
import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.TOGGLE_SIDEBAR: {
        //dispatch
      }
    }
  };

MiddlewareRegistry.register(middleware);
