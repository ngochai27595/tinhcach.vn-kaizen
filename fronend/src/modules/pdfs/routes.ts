import RouteRegistry from "../base/redux/RouteRegistry";
import { ReportsPage } from "./pages";

const routes = [
  {
    path: "/pdfs/reports",
    noAuthen: false,
    permision: "SUPER_ADMIN",
    component: ReportsPage,
  },
];

RouteRegistry.register(routes);
