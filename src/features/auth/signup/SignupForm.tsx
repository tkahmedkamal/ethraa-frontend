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
import { ISignup } from "../../../interfaces";
import signupSchema from "./signupSchema";
import useSignup from "./useSignup";

const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  const { signup, isLoading } = useSignup();

  return (
    <>
      <Register label="registration.signupForm.label">
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values: ISignup) => signup(values)}
        >
          {() => (
            <Form>
              <FormControl>
                <Input
                  type="text"
                  name="name"
                  id="inputName"
                  placeholder={t("registration.signupForm.name")}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="text"
                  name="username"
                  id="inputUsername"
                  placeholder={t("registration.signupForm.username")}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="email"
                  name="email"
                  id="inputEmail"
                  placeholder={t("registration.signupForm.email")}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="password"
                  name="password"
                  id="inputPassword"
                  placeholder={t("registration.signupForm.password")}
                />
              </FormControl>

              <FormControl>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="inputConfirmPassword"
                  placeholder={t("registration.signupForm.confirmPassword")}
                />
              </FormControl>

              <Button type="submit" loading={isLoading}>
                {t("button.signup")}
              </Button>
            </Form>
          )}
        </Formik>
      </Register>

      <RegisterSwitch>
        {t("registration.signupForm.haveAccount")}
        <TextLink label="registration.signupForm.login" to="/auth/login" />
      </RegisterSwitch>
    </>
  );
};

export default SignupForm;
