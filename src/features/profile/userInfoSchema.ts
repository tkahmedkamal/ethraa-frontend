import { object, string } from "yup";

const userInfoSchema = object({
  name: string()
    .min(3, "registration.name.minLength")
    .max(50, "registration.name.maxLength")
    .trim()
    .required("registration.name.required"),
});

export default userInfoSchema;
