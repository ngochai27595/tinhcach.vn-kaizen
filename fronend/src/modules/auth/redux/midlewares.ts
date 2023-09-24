import { Store } from "redux";
import { ACTION_TYPES } from "./actionTypes";
import { MiddlewareRegistry, setAuthToken } from "../../base";
import { apiLogin } from "./services";
import { setUserInfo } from "./actions";

export const middleware =
  ({ dispatch, getState }: Store) =>
  (next: Function) =>
  async (action: any) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.LOGOUT: {
        setAuthToken("");
        dispatch(
          setUserInfo({
            token: null,
          })
        );
        return;
      }
      case ACTION_TYPES.GET_USER_INFO: {
        apiLogin({ username: action.data, password: "0" })
          .then((rsLogin) => {
            setAuthToken(rsLogin.access_token);
            dispatch(
              setUserInfo({
                token: rsLogin.access_token,
                ...rsLogin,
              })
            );
          })
          .catch((err) => {
            alert("Vui lòng liên hệ admin!");
          });
        return;
      }
      case ACTION_TYPES.SUBMIT_LOGIN: {
        apiLogin({ username: action.u, password: action.p })
          .then((rsLogin) => {
            setAuthToken(rsLogin.access_token);
            dispatch(
              setUserInfo({
                token: rsLogin.access_token,
                ...rsLogin,
              })
            );
          })
          .catch((err) => {
            alert("Vui lòng liên hệ admin!");
          });
        return;
      }
    }
  };

MiddlewareRegistry.register(middleware);
