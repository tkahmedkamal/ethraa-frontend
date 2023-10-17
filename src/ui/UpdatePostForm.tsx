import { Form, Formik, FormikValues } from "formik";
import { useTranslation } from "react-i18next";
import { Button, FormControl, Input, Select } from ".";
import { IUpdatePostForm } from "../interfaces";
import usePostCtx from "../hooks/usePostCtx";
import Textarea from "./Textarea";
import { postSchema } from "../features/home";
import { useUpdatePost } from "../hooks";

const UpdatePostForm: React.FC<IUpdatePostForm> = ({ postId, close }) => {
  const { t } = useTranslation();
  const { getPost } = usePostCtx();
  const { updatePost, isLoading } = useUpdatePost();

  const post = getPost(postId as string);

  const handleSubmit = (values: FormikValues) => {
    const data = {
      quote: values.quote,
      quoteFor: values.quoteFor,
      isPublic: values.isPublic === "public",
    };

    updatePost(
      { postId, ...data },
      {
        onSettled: close,
      },
    );
  };

  return (
    <>
      <h2 className="mb-6 text-lg font-bold text-light-title dark:text-dark-title">
        {t("post.editTitle")}
      </h2>

      <Formik
        initialValues={{
          quote: post?.quote ?? "",
          quoteFor: post?.quoteFor ?? "",
          isPublic: post?.isPublic ? "public" : "private",
        }}
        validationSchema={postSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values }) => (
          <Form>
            <FormControl>
              <Textarea
                type="text"
                name="quote"
                placeholder={t("post.form.quote")}
                id="inputQuote"
                value={values.quote}
                forPost
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                name="quoteFor"
                placeholder={t("post.form.quoteFor")}
                id="inputQuoteFor"
                value={values.quoteFor}
              />
            </FormControl>

            <FormControl>
              <Select id="inputPublic" name="isPublic" value={values.isPublic}>
                <option value="public">{t("global.public")}</option>
                <option value="private">{t("global.private")}</option>
              </Select>
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

export default UpdatePostForm;
