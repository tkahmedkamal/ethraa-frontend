import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, FormControl, Input, Register } from "../../../ui";
import { IResetPassword } from "../../../interfaces";
import useResetPassword from "./useResetPassword";
import resetPasswordSchema from "./resetPasswordSchema";

const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const { token } = useParams();
  const { resetPassword, isLoading } = useResetPassword();

  const handleSubmit = (values: IResetPassword) => {
    resetPassword({ token, values });
  };

  return (
    <>
      <Register label="registration.resetPasswordForm.label">
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={resetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <FormControl>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder={t("registration.resetPasswordForm.password")}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="inputConfirmPassword"
                  placeholder={t(
                    "registration.resetPasswordForm.confirmPassword",
                  )}
                />
              </FormControl>

              <div className="flex items-end gap-3">
                <Button type="submit" loading={isLoading}>
                  {t("button.resetPassword")}
                </Button>
                <Button to="/auth/forgot-password" variant="outlined">
                  {t("button.resendToken")}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Register>
    </>
  );
};

export default ResetPasswordForm;
