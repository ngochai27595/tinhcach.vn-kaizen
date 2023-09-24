import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";
import { MiddlewareRegistry } from "../../base";
import { apiAddLabel, apiGetLabels, apiUpdateLabel } from "./services";
import { setLabels } from "./actions";
import { toastNotify } from "../../common";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_LABELS: {
        dispatch(
          setLabels({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetLabels({
          page: action.data,
          size: action.size,
        })
          .then((rs: any) => {
            dispatch(setLabels({ ...rs, loading: false }));
          })
          .catch((err) => {});
        return;
      }
      case ACTION_TYPES.ADD_LABEL: {
        const { labels } = getState().labels;
        apiAddLabel(action.data).then((rs: any) => {
          if (rs.status) {
            toastNotify("Thêm nhãn thành công!", "info");
            dispatch(
              setLabels({
                ...labels,
                data: [rs.data, ...labels.data],
              })
            );
          } else {
            toastNotify(rs.msg);
          }
        });
        return;
      }
      case ACTION_TYPES.UPDATE_LABEL: {
        const { labels } = getState().labels;
        apiUpdateLabel(action.data).then((rs: any) => {
          if (rs.status) {
            toastNotify("Cập nhật nhãn thành công!", "info");
            dispatch(
              setLabels({
                ...labels,
                data: labels.data.map((l: any) =>
                  l.id === action.data.id ? { ...l, ...action.data } : l
                ),
              })
            );
          } else {
            toastNotify(rs.msg);
          }
        });
        return;
      }
    }
  };

MiddlewareRegistry.register(middleware);
