import { Form, Formik, FormikValues } from "formik";
import { useTranslation } from "react-i18next";
import { Button, FormControl, Input } from "../../ui";
import Textarea from "../../ui/Textarea";
import useUpdateMe from "./useUpdateMe";
import { useAuthCtx } from "../../hooks";
import { IEditUserInfoForm, IUser } from "../../interfaces";
import userInfoSchema from "./userInfoSchema";

const EditUserInfoForm: React.FC<IEditUserInfoForm> = ({ close }) => {
  const { t } = useTranslation();
  const { user } = useAuthCtx();
  const { updateMe, isLoading } = useUpdateMe();

  const { name, bio, facebook, twitter } = user as IUser;

  const handleSubmit = (values: FormikValues) => {
    updateMe(values as IUser, {
      onSettled: () => {
        close?.();
      },
    });
  };

  return (
    <>
      <h2 className="mb-6 text-lg font-bold text-light-title dark:text-dark-title">
        {t("user.updateTitle")}
      </h2>

      <Formik
        initialValues={{
          name: name ?? "",
          bio: bio ?? "",
          facebook: facebook ?? "",
          twitter: twitter ?? "",
        }}
        validationSchema={userInfoSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <Input
                type="text"
                name="name"
                placeholder={t("user.form.name")}
                id="inputName"
                value={values.name}
              />
            </FormControl>

            <FormControl>
              <Input
                type="text"
                name="facebook"
                placeholder={t("user.form.facebook")}
                id="inputFacebook"
                value={values.facebook}
              />
            </FormControl>

            <FormControl>
              <Input
                type="text"
                name="twitter"
                placeholder={t("user.form.twitter")}
                id="inputTwitter"
                value={values.twitter}
              />
            </FormControl>

            <FormControl>
              <Textarea
                name="bio"
                placeholder={t("post.form.quote")}
                id="inputBio"
                value={values.bio}
                forPost
              />
            </FormControl>

            <div className="flex items-center gap-3">
              <Button type="submit" loading={isLoading}>
                {t("button.editPost")}
              </Button>
              <Button type="button" variant="outlined" handler={close}>
                {t("button.cancel")}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditUserInfoForm;
