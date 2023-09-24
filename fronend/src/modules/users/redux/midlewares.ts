import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";
import { MiddlewareRegistry } from "../../base";
import { apiGetUsers, apiAddPermision, apiDeletePermision } from "./services";
import { setUser, setUsers } from "./actions";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.ADD_PERMISION: {
        dispatch(setUser(action.data));
        apiAddPermision({ userId: action.data.id, role: "YO_REVIEW" }).then(
          (rs) => {
            alert("Thêm quyền thành công!");
            dispatch(
              setUser({ ...action.data, roles: "YO_REVIEW", loading: false })
            );
          }
        );
        return;
      }
      case ACTION_TYPES.DELETE_PERMISION: {
        dispatch(setUser(action.data));
        apiDeletePermision({ userId: action.data.id, role: "YO_REVIEW" }).then(
          (rs) => {
            alert("Xoá quyền thành công!");
            dispatch(setUser({ ...action.data, roles: "", loading: false }));
          }
        );
        return;
      }
      case ACTION_TYPES.GET_USERS: {
        dispatch(
          setUsers({
            data: [],
            page: action.data,
            loading: true,
          })
        );
        apiGetUsers({
          page: action.data,
          size: action.size,
        })
          .then((rs) => {
            dispatch(setUsers({ ...rs, loading: false }));
          })
          .catch((err) => {});
      }
    }
  };

MiddlewareRegistry.register(middleware);
