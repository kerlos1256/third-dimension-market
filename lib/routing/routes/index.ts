import { ArrElement } from "@utils";

export type RoutesType = MainRouterInterface;

export type MainRouterInterface = {
  route: string;
  dataKeys: Record<string, any>;
  mapProps: (
    keys: readonly string[],
    data: Record<string, any>
  ) => Record<string, any>;
  id: (id: string) => RoutesType;
  addPath: (path: string) => RoutesType;
  location: (location: string) => RoutesType;
  onMap: () => RoutesType;
  search: () => RoutesType;
};

export const MainRoutes: MainRouterInterface = {
  route: "",

  dataKeys: {},
  addPath(path: string) {
    this.route = `${this.route}/${path}`;
    this;
    return this;
  },
  id(id: string) {
    this.addPath(id);
    return this;
  },
  mapProps<TKeys extends readonly string[]>(
    keys: TKeys,
    data: Record<string, any>
  ): Record<ArrElement<TKeys>, any> {
    const props: Record<ArrElement<TKeys>, any> = keys.reduce((acc, curr) => {
      return { ...acc, [curr]: data[curr] };
    }, {} as Record<ArrElement<TKeys>, any>);
    return props;
  },
  location(location) {
    this.addPath(location);
    return this;
  },
  onMap() {
    this.addPath("onmap");
    return this;
  },
  search() {
    this.addPath("search");
    return this;
  },
};
