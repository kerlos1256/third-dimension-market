import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AsyncReturnType } from "@utils";
import {
  CheckValidation,
  InferType,
  RecommendedProductsApiResponseValidationSchema,
  RecommendedProductValidationSchema,
} from "@validation";
import axios, { AxiosResponse } from "axios";
import { ProductsEndPoints } from "@services";
// infered types

export type RecommendedProductDataType = InferType<
  typeof RecommendedProductValidationSchema
>;

export type RecommendedProductsApiResponseType = InferType<
  typeof RecommendedProductsApiResponseValidationSchema
>;

// fetcher
export const getRecommendedProducts =
  async (): Promise<RecommendedProductsApiResponseType> => {
    const res: AxiosResponse<ReturnType<typeof getRecommendedProducts>> =
      await axios.get(ProductsEndPoints.getRecommendedProducts);
    return CheckValidation(
      RecommendedProductsApiResponseValidationSchema,
      res.data
    );
  };

// hook
export const getRecommendedProductsQueryKey = (additionalKey?: any) => [
  "RecommendedProductsQuery",
  additionalKey || {},
];
export const useGetRecommendedProductsQuery = (
  options?: UseQueryOptions<
    any,
    any,
    AsyncReturnType<typeof getRecommendedProducts>,
    any
  >
) => {
  return useQuery(
    getRecommendedProductsQueryKey(),
    getRecommendedProducts,
    options
  );
};
