import { createEndPoint } from "../utils";

const productsNamespace = "products";

export const ProductsEndPoints = {
  getRecommendedProducts: createEndPoint(`${productsNamespace}/recommended`),
};
