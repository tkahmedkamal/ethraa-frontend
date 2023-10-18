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

  const variants = {
    solid: variant === "solid" && loading ? "disabled" : "btn-solid",
    outlined:
      variant === "outlined" && loading ? "outlined-disabled" : "btn-outlined",
    danger:
      lite && danger
        ? "!text-light-danger hover:!text-light-danger/60 dark:!text-dark-danger dark:hover:!text-dark-danger/60"
        : variant === "solid" && danger
        ? "bg-light-danger dark:bg-dark-danger hover:bg-light-danger/60 dark:hover:bg-dark-danger/60"
        : "",
  };

  return (
    <>
      {!to && !lite && (
        <button
          type={type}
          className={`btn ${variants[variant]} ${variants.danger}`}
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
          className={`text-light-title transition-colors duration-500 hover:text-light-title/60 dark:text-dark-title dark:hover:text-dark-title/60 ${variants.danger}`}
          onClick={handler}
        >
          {t(liteLabel as string)}
        </button>
      )}
    </>
  );
};

export default Button;
