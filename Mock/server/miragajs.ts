import {
  baseUrl,
  ProductsEndPoints,
  RecommendedProductsApiResponseType,
} from "@services";
import { createServer } from "miragejs";

export function startMockServer() {
  return createServer({
    routes() {
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json")
          return true;
      });

      this.urlPrefix = baseUrl;

      this.get(
        ProductsEndPoints.getRecommendedProducts,
        (): RecommendedProductsApiResponseType => {
          return {
            data: [...Array(30)].map((_, i) => ({
              id: `${i}`,
              name: `product-${i}`,
              price: parseInt((Math.random() * 100).toFixed(2)),
              thumbnail: "/products/mic.png",
              colors: ["red", "green", "yellow", "cyan"],
              sizes: [],
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            })),
            hasMore: false,
            total: 150,
          };
        }
      );
    },
  });
}
