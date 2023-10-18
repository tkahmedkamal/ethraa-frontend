import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import {
  Button,
  FormControl,
  Input,
  Register,
  RegisterSwitch,
  TextLink,
} from "../../../ui";
import { ILogin } from "../../../interfaces";
import useLogin from "./useLogin";
import loginSchema from "./loginSchema";

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { login, isLoading } = useLogin();

  return (
    <>
      <Register label="registration.loginForm.label">
        <Formik
          initialValues={{ username: "ethraaApp", password: "user1234" }}
          validationSchema={loginSchema}
          onSubmit={(values: ILogin) => login(values)}
        >
          {() => (
            <Form>
              <FormControl>
                <Input
                  type="text"
                  name="username"
                  id="inputUsername"
                  placeholder={t("registration.loginForm.username")}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder={t("registration.loginForm.password")}
                />
              </FormControl>

              <FormControl>
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-light-text dark:text-dark-text"
                >
                  {t("registration.loginForm.forgotPassword")}
                </Link>
              </FormControl>

              <Button type="submit" loading={isLoading}>
                {t("button.login")}
              </Button>
            </Form>
          )}
        </Formik>
      </Register>

      <RegisterSwitch>
        {t("registration.loginForm.noAccount")}
        <TextLink label="registration.loginForm.newAccount" to="/auth/signup" />
      </RegisterSwitch>
    </>
  );
};

export default LoginForm;
