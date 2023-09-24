import RouteRegistry from "../base/redux/RouteRegistry";
import {
  ClassesPage,
  ReportClassPage,
  ReportStudentPage,
  TransactionPage,
} from "./pages";

const routes = [
  {
    path: "/classes",
    noAuthen: false,
    permision: "KES_TEACHER",
    component: ClassesPage,
  },
  {
    path: "/report-classes",
    noAuthen: false,
    permision: "KES_TEACHER",
    component: ReportClassPage,
  },
  {
    path: "/report-students",
    noAuthen: false,
    permision: "KES_STUDENT",
    component: ReportStudentPage,
  },
  {
    path: "/transactions",
    noAuthen: false,
    permision: "KES_ADMIN",
    component: TransactionPage,
  },
];

RouteRegistry.register(routes);
