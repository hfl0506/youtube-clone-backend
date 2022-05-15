import { object, string, TypeOf } from "zod";

export const loginInputSchema = {
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Email should have valid format"),
    password: string({
      required_error: "Password is required",
    })
      .min(6, "password is minimum 6 characters")
      .max(64, "password is maximum 64 characters"),
  }),
};

export type LoginBody = TypeOf<typeof loginInputSchema.body>;
