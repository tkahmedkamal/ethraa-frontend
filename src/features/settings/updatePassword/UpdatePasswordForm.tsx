import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, FormControl, Input } from "../../../ui";
import updatePasswordSchema from "./updatePasswordSchema";
import { useUpdateMePassword } from "../../../hooks";

const UpdatePasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const { updatePassword, isLoading } = useUpdateMePassword();

  return (
    <Formik
      initialValues={{ oldPassword: "", password: "", confirmPassword: "" }}
      validationSchema={updatePasswordSchema}
      onSubmit={(values) => updatePassword(values)}
    >
      {() => (
        <Form>
          <FormControl>
            <Input
              type="password"
              name="oldPassword"
              placeholder={t("settings.updatePassword.form.oldPassword.label")}
              id="inputOldPassword"
            />
          </FormControl>

          <FormControl>
            <Input
              type="password"
              name="password"
              placeholder={t("settings.updatePassword.form.newPassword.label")}
              id="inputPassword"
            />
          </FormControl>

          <FormControl>
            <Input
              type="password"
              name="confirmPassword"
              placeholder={t(
                "settings.updatePassword.form.confirmPassword.label",
              )}
              id="inputConfirmPassword"
            />
          </FormControl>

          <Button type="submit" loading={isLoading}>
            {t("button.updatePassword")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePasswordForm;
