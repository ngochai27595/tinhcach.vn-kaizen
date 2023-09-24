import RouteRegistry from "../base/redux/RouteRegistry";
import { ReportPage, ReviewPage, ReviewsPage } from "./pages";

const routes = [
  {
    path: "/reviews/:id",
    noAuthen: false,
    permision: "YO_REVIEW",
    component: ReviewPage,
  },
  {
    path: "/reviews",
    noAuthen: false,
    permision: "YO_REVIEW",
    component: ReviewsPage,
  },
  {
    path: "/reports",
    noAuthen: false,
    permision: "YO_REVIEW",
    component: ReportPage,
  },
];

RouteRegistry.register(routes);
