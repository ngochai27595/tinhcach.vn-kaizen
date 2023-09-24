import RouteRegistry from "../base/redux/RouteRegistry";
import { LabelsPage } from "./pages";

const routes = [
  {
    path: "/labels",
    noAuthen: false,
    permision: "SUPER_ADMIN",
    component: LabelsPage,
  },
  {
    path: "/yo-labels",
    noAuthen: false,
    permision: "YO_ADMIN",
    component: LabelsPage,
  },
];

RouteRegistry.register(routes);
