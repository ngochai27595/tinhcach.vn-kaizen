class RouteRegistry {
  _routes: any[];

  constructor() {
    this._routes = [];
  }

  getRoutes() {
    return this._routes;
  }

  register(routes: any) {
    this._routes = [...this._routes, ...routes];
  }
}

export default new RouteRegistry();
