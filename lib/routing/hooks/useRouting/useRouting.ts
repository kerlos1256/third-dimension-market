import { MainRoutes, RoutesType } from "../../routes";
import React from "react";
import { routingContext } from "../../Providers";

export const useRouting = () => {
  const { visit: VisitRoute } = React.useContext(routingContext);

  function visit(fn: (routes: RoutesType) => RoutesType) {
    const routes = fn({ ...MainRoutes });
    const route = routes.route;
    if (route.length < 1) return;
    VisitRoute(routes.route);
  }

  return {
    visit,
  };
};
