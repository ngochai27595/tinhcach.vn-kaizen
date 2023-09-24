import RouteRegistry from "../base/redux/RouteRegistry";
import { UsersPage } from "./pages";

const routes = [
  {
    path: "/users",
    noAuthen: false,
    permision: "SUPER_ADMIN",
    component: UsersPage,
  },
  {
    path: "/yo-users",
    noAuthen: false,
    permision: "YO_ADMIN",
    component: UsersPage,
  },
];

RouteRegistry.register(routes);
