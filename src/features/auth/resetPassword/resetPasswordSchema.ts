import { object, string, ref } from "yup";

const resetPasswordSchema = object({
  password: string()
    .min(8, "registration.password.minLength")
    .required("registration.password.required"),

  confirmPassword: string()
    .oneOf([ref("password")], "registration.password.notMatch")
    .required("registration.password.confirmRequired"),
});

export default resetPasswordSchema;
