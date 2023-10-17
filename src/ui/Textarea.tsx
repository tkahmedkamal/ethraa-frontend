import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from ".";
import { ITextarea } from "../interfaces";

const Textarea = ({ forPost = false, ...props }: ITextarea): JSX.Element => {
  const [field, meta] = useField(props);
  const { t } = useTranslation();

  const variants = {
    forPost: forPost
      ? "rounded-2xl border px-5 py-3 border-light-divider focus:border-primary-primary dark:border-dark-divider"
      : "border-0 mt-8",
    error: meta.error && meta.touched ? "input-error" : "",
  };

  return (
    <>
      <textarea
        {...props}
        {...field}
        rows={forPost ? 5 : 2}
        className={`transparent w-full resize-none bg-light-default font-medium text-light-text outline-none transition-colors duration-500 dark:bg-dark-default dark:text-dark-text dark:placeholder:text-dark-text/40 ${variants.error} ${variants.forPost}`}
      />

      {meta.error && meta.touched && (
        <ErrorMessage>{t(meta.error)}</ErrorMessage>
      )}
    </>
  );
};

export default Textarea;
