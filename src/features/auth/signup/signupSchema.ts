import { object, string, ref } from "yup";

const signupSchema = object({
  name: string()
    .min(3, "registration.name.minLength")
    .max(50, "registration.name.maxLength")
    .trim()
    .required("registration.name.required"),

  username: string()
    .min(3, "registration.username.minLength")
    .max(20, "registration.username.maxLength")
    .matches(/^[A-Za-z0-9]+$/, "registration.username.englishChar")
    .required("registration.username.required"),

  email: string()
    .email("registration.email.invalid")
    .required("registration.email.required"),

  password: string()
    .min(8, "registration.password.minLength")
    .required("registration.password.required"),

  confirmPassword: string()
    .oneOf([ref("password")], "registration.password.notMatch")
    .required("registration.password.confirmRequired"),
});

export default signupSchema;
