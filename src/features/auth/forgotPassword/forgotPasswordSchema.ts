import { object, string } from "yup";

const forgotPasswordSchema = object({
  email: string()
    .email("registration.email.invalid")
    .required("registration.email.required"),
});

export default forgotPasswordSchema;
