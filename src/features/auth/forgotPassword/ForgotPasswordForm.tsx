import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, FormControl, Input, Register } from "../../../ui";
import { IForgotPassword } from "../../../interfaces";
import forgotPasswordSchema from "./forgotPasswordSchema";
import useForgotPassword from "./useForgotPassword";

const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const { forgotPassword, isLoading } = useForgotPassword();

  return (
    <>
      <Register label="registration.forgotPasswordForm.label">
        <p className="mb-6 border-light-divider text-sm font-semibold leading-loose text-light-text dark:border-dark-divider dark:text-dark-text">
          {t("registration.forgotPasswordForm.text")}
        </p>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordSchema}
          onSubmit={(values: IForgotPassword) => forgotPassword(values)}
        >
          {() => (
            <Form>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  id="inputEmail"
                  placeholder={t("registration.forgotPasswordForm.email")}
                />
              </FormControl>

              <div className="flex items-end gap-3">
                <Button type="submit" loading={isLoading}>
                  {t("button.send")}
                </Button>
                <Button to="/auth/login" variant="outlined">
                  {t("button.cancel")}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Register>
    </>
  );
};

export default ForgotPasswordForm;
