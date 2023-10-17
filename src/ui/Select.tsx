import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from ".";
import { ISelect } from "../interfaces";

const Select = ({ set, children, ...props }: ISelect): JSX.Element => {
  const [field, meta] = useField<ISelect>(props);
  const { t } = useTranslation();

  return (
    <>
      <select
        {...props}
        {...field}
        className={`input py-2 ${
          meta.error && meta.touched ? "input-error" : ""
        }`}
        onChange={(e) => {
          field.onChange(e);
          if (set) {
            set(e.target.value);
          }
        }}
        value={`${field.value}`}
      >
        {children}
      </select>

      {meta.error && meta.touched && (
        <ErrorMessage>{t(meta.error)}</ErrorMessage>
      )}
    </>
  );
};

export default Select;
