import { object, string } from "yup";

const loginSchema = object({
  username: string().required("registration.username.required"),

  password: string().required("registration.password.required"),
});

export default loginSchema;
