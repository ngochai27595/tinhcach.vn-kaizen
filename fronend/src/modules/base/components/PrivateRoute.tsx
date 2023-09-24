import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { CContainer } from "@coreui/react";
import { AppSidebar, AppHeader } from "../../core-ui";

const PrivateRoute = (props: { path: any; component: any; permision: any }) => {
  const { auth } = useSelector((state: { auth: any }) => state);
  const { sidebarShow } = useSelector((state: { base: any }) => state.base);

  if (auth.token == null) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }
  if (
    auth.auth?.permisions &&
    auth.auth?.permisions.findIndex((p: any) => p.role === props.permision) ===
      -1 &&
    props.permision !== ""
  ) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <div>
      <AppSidebar />
      <div
        className={`wrapper wrapper-${
          sidebarShow ? "1" : "0"
        } d-flex flex-column min-vh-100 bg-light`}
      >
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <Route path={props.path} component={props.component} />
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
