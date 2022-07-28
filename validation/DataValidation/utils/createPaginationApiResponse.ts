import { AnySchema, array, boolean, number, object } from "yup";

export function createPaginationApiResponse<TSchema extends AnySchema>(
  schema: TSchema
) {
  return object({
    hasMore: boolean().required(),
    total: number().required(),
    data: array().of(schema).min(0).required(),
  });
}
