import { createPaginationApiResponse } from "../../utils/createPaginationApiResponse";
import { array, number, object, string } from "yup";

export const RecommendedProductValidationSchema = object({
  id: string().required(),
  name: string().required(),
  description: string().required(),
  price: number().required(),
  colors: array().of(string().required()).min(0).required(),
  sizes: array().of(string().required()).min(0).required(),
  thumbnail: string().required(),
});

export const RecommendedProductsApiResponseValidationSchema =
  createPaginationApiResponse(RecommendedProductValidationSchema).required();
