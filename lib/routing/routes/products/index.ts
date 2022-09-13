import { RoutesType, RecordProps } from "@lib";

export type ProductsRoutesType = {
  product: () => RoutesType;
  visitProductDetails: (props: RecordProps) => RoutesType;
};

export const ProductsRoutes: RoutesType = {
  product() {
    this.addPath("product");
    return this;
  },
  visitProductDetails(props) {
    const productId = props["id"];
    if (!productId) return this;
    return this.product().id(productId);
  },
} as RoutesType;
