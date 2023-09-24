import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { PrivateRoute } from "./modules/base";
import { ToastContainer } from "react-toastify";
import "./modules/auth";
import "./modules/classes";
import "./modules/labels";
import "./modules/pdfs";
import "./modules/reviews";
import "./modules/users";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar-react/dist/simplebar.min.css";
import "./modules/core-ui/scss/style.scss";
import RouteRegistry from "./modules/base/redux/RouteRegistry";
const routes = RouteRegistry.getRoutes();

function App() {
  const history = useHistory();
  const { auth } = useSelector((state: { auth: any }) => state);

  useEffect(() => {
    if (auth.token == null) {
      if (history.location.pathname !== "/login") {
        history.push("/login");
      }
    } else {
      if (history.location.pathname === "/login") {
        history.push("/");
      }
    }
  }, [auth]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ToastContainer />
      <Switch>
        {routes.map((route: any) => {
          const RouteComponent = route.noAuthen ? Route : PrivateRoute;
          return (
            <RouteComponent
              exact
              key={route.path}
              path={route.path}
              permision={route.permision}
              component={route.component}
            />
          );
        })}
      </Switch>
    </>
  );
}

export default App;
