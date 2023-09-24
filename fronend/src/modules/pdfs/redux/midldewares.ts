import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";
import { MiddlewareRegistry } from "../../base";
import { apiCountPdfByCreatedAtV2, apiGetPdfReports } from "./services";
import { setPdfReport } from "./actions";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_REPORTS: {
        apiGetPdfReports(action.params).then((rs) => {
          dispatch(setPdfReport(rs));
        });

        apiCountPdfByCreatedAtV2({}).then((rs) => {
          dispatch(setPdfReport({ all: rs }));
        });

        return;
      }
    }
  };

MiddlewareRegistry.register(middleware);
