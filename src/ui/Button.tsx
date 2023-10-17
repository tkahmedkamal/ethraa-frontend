import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LoadingIcon } from ".";
import { IButton } from "../interfaces";

const Button: React.FC<IButton> = ({
  type,
  to,
  lite,
  liteLabel,
  variant = "solid",
  loading = false,
  withoutLoadingIcon = false,
  danger,
  handler,
  children,
}) => {
  const { t } = useTranslation();

  const buttonStyled = {
    solid: variant === "solid" && loading ? "disabled" : "btn-solid",
    outlined:
      variant === "outlined" && loading ? "outlined-disabled" : "btn-outlined",
  };

  return (
    <>
      {!to && !lite && (
        <button
          type={type}
          className={`btn ${buttonStyled[variant]}`}
          disabled={loading}
          onClick={handler}
        >
          {loading && !withoutLoadingIcon && <LoadingIcon />}
          {children}
        </button>
      )}

      {to && (
        <Link
          to={to}
          className={`btn inline-block ${
            variant === "outlined" ? "btn-outlined" : "btn-solid"
          }`}
        >
          {children}
        </Link>
      )}

      {lite && (
        <button
          className={`text-light-title transition-colors duration-500 hover:text-light-title/60 dark:text-dark-title dark:hover:text-dark-title/60 ${
            danger
              ? "!text-light-danger hover:!text-light-danger/60 dark:!text-dark-danger dark:hover:!text-dark-danger/60"
              : ""
          }`}
          onClick={handler}
        >
          {t(liteLabel as string)}
        </button>
      )}
    </>
  );
};

export default Button;
