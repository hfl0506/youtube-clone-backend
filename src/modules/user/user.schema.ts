import { object, string, TypeOf } from "zod";

export const registerUserSchema = {
  body: object({
    username: string({
      required_error: "Username is required",
    }),
    email: string({ required_error: "Email is required" }).email(
      "Email is invalid"
    ),
    password: string({
      required_error: "Password is required",
    })
      .min(6, "minimum more than 6 chars of password")
      .max(64, "maximum less than 64 chars of password"),
    confirmPassword: string({
      required_error: "Password Confirmation is required",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
};

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;
