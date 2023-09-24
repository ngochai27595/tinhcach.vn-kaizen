import RouteRegistry from "../base/redux/RouteRegistry";
import { LoginPage } from "./pages";

const HomePage = () => {
  return null;
};

const routes = [
  {
    path: "/login",
    noAuthen: true,
    component: LoginPage,
  },
  {
    path: "/",
    noAuthen: false,
    permision: "",
    component: HomePage,
  },
];

RouteRegistry.register(routes);
