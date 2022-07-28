import { AnySchema } from "yup";

export async function CheckValidation<TSchema extends AnySchema, TData>(
  schema: TSchema,
  data: TData
): Promise<TData> {
  return schema.validate(data);
}
