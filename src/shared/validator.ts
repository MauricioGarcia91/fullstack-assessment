import { ZodObject, ZodRawShape } from 'zod';

export class Validator<T extends ZodRawShape> {
  private schema: ZodObject<T>;

  constructor(schema: ZodObject<T>) {
    this.schema = schema;
  }

  validateSchema = async (input: unknown) => {
    const { data, success, error } = await this.schema.safeParseAsync(input);

    if (!success) {
      return {
        error: error.flatten().fieldErrors
      };
    }

    return { data };
  };

  validatePartialSchema = async (input: unknown) => {
    const { data, success, error } = await this.schema
      .partial()
      .safeParseAsync(input);

    if (!success) {
      return {
        error: error.flatten().fieldErrors
      };
    }

    return { data };
  };
}
