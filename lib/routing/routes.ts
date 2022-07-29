import { ArrElement } from "@utils";

export class Routes {
  constructor() {}

  route: string = "";

  dataKeys = {
    products: ["id", "thumbnail"] as const,
  };

  private addPath(path: string) {
    this.route = `${this.route}/${path}`;
  }

  private products() {
    this.addPath("products");
    return this;
  }

  private id(id: string) {
    this.addPath(id);
    return this;
  }

  private shop(id: string) {
    this.addPath("shop");
    this.id(id);
    return this;
  }

  private mapProps<TKeys extends readonly string[]>(
    keys: TKeys,
    data: Record<string, any>
  ): Record<ArrElement<TKeys>, any> {
    const props: Record<ArrElement<TKeys>, any> = keys.reduce((acc, curr) => {
      return { ...acc, [curr]: data[curr] };
    }, {} as Record<ArrElement<TKeys>, any>);
    return props;
  }

  productById(data: Record<string, any>) {
    const productsKeys = this.dataKeys.products;
    const props = this.mapProps(productsKeys, data);

    const productId = props["id"];

    if (typeof productId !== "string") {
      return this;
    }

    this.products().id(productId);
    return this;
  }
}
