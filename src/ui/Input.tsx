import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from ".";
import { IFieldProps } from "../interfaces";

const Input = ({ ...props }: IFieldProps): JSX.Element => {
  const [field, meta] = useField(props);
  const { t } = useTranslation();

  return (
    <>
      <input
        {...props}
        {...field}
        className={`input ${meta.error && meta.touched ? "input-error" : ""}`}
      />

      {meta.error && meta.touched && (
        <ErrorMessage>{t(meta.error)}</ErrorMessage>
      )}
    </>
  );
};

export default Input;
