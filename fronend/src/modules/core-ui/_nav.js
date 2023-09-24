import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilDrop,
  cilPencil,
  cilSpeedometer,
  cilActionRedo,
} from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Báo cáo",
    to: "/",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
    permision: "YO_REVIEW",
  },
  {
    component: CNavTitle,
    name: "REVIEW",
    permision: "YO_REVIEW",
  },
  {
    component: CNavItem,
    name: "Danh sách review",
    to: "/reviews",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    permision: "YO_REVIEW",
  },
  {
    component: CNavItem,
    name: "Báo cáo",
    to: "/reports",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    permision: "YO_REVIEW",
  },
  {
    component: CNavTitle,
    name: "Tài khoản",
    permision: "SUPER_ADMIN",
  },
  {
    component: CNavItem,
    name: "Danh sách tài khoản",
    to: "/yo-users",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    permision: "YO_ADMIN",
  },
  {
    component: CNavItem,
    name: "Danh sách tài khoản",
    to: "/users",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    permision: "SUPER_ADMIN",
  },
  {
    component: CNavItem,
    name: "Danh sách nhãn",
    to: "/labels",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    permision: "SUPER_ADMIN",
  },
  {
    component: CNavItem,
    name: "Danh sách nhãn",
    to: "/yo-labels",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    permision: "YO_ADMIN",
  },
  {
    component: CNavTitle,
    name: "KES",
    permision: "SUPER_ADMIN",
  },
  {
    component: CNavItem,
    name: "Danh sách lớp",
    to: "/classes",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    permision: "KES_TEACHER",
  },
  {
    component: CNavItem,
    name: "Báo cáo lớp học",
    to: "/report-classes",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    permision: "KES_TEACHER",
  },
  {
    component: CNavItem,
    name: "Báo cáo lịch học",
    to: "/report-students",
    icon: <CIcon icon={cilActionRedo} customClassName="nav-icon" />,
    permision: "KES_STUDENT",
  },
  {
    component: CNavItem,
    name: "Quản lý thu",
    to: "/transactions?type=2",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    permision: "KES_ADMIN",
  },
  {
    component: CNavItem,
    name: "Quản lý chi",
    to: "/transactions?type=1",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    permision: "KES_ADMIN",
  },
  {
    component: CNavTitle,
    name: "PDFS",
    permision: "SUPER_ADMIN",
  },
  {
    component: CNavItem,
    name: "Reports",
    to: "/pdfs/reports",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    permision: "SUPER_ADMIN",
  },
];

export default _nav;
