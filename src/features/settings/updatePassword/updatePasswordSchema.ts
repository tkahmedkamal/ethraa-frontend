import { object, string, ref } from "yup";

const updatePasswordSchema = object({
  oldPassword: string().required(
    "settings.updatePassword.form.oldPassword.required",
  ),

  password: string()
    .min(8, "settings.updatePassword.form.newPassword.validate.minLength")
    .required("settings.updatePassword.form.newPassword.validate.required"),

  confirmPassword: string()
    .oneOf(
      [ref("password")],
      "settings.updatePassword.form.confirmPassword.validate.notMatch",
    )
    .required("settings.updatePassword.form.confirmPassword.validate.required"),
});

export default updatePasswordSchema;
