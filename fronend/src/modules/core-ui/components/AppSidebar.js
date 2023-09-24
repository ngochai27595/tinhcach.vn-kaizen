import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { logoNegative } from "../assets/brand/logo-negative";
import { sygnet } from "../assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import navigation from "../_nav";
import { toogleSidebar } from "../../base";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const { auth } = useSelector((state) => state.auth);
  const { sidebarShow } = useSelector((state) => state.base);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {auth?.permisions &&
          auth?.permisions.findIndex((p) => p.role.indexOf("KES") !== -1) !==
            -1 && <img src="/logo.png" style={{ height: "40px" }} alt="" />}
        {auth?.permisions &&
          auth?.permisions.findIndex((p) => p.role.indexOf("KES") !== -1) ===
            -1 && (
            <>
              <CIcon
                className="sidebar-brand-full"
                icon={logoNegative}
                height={35}
              />
              <CIcon
                className="sidebar-brand-narrow"
                icon={sygnet}
                height={35}
              />
            </>
          )}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          dispatch(toogleSidebar());
        }}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
