import { Button } from ".";
import { IConfirm } from "../interfaces";
import { useTranslation } from "react-i18next";

const Confirm: React.FC<IConfirm> = ({
  label,
  text,
  btnActionLabel,
  btnCloseLabel,
  loading,
  danger,
  handler,
  close,
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    handler();
    close?.();
  };

  return (
    <section className="space-y-6">
      <h4 className="text-2xl font-bold text-light-title dark:text-dark-title">
        {t(label)}
      </h4>
      <p className="text-lg text-light-text dark:text-dark-text">{t(text)}</p>

      <div className="flex items-start justify-end gap-3">
        <Button loading={loading} handler={handleClick} danger={danger}>
          {t(btnActionLabel)}
        </Button>
        <Button variant="outlined" handler={close}>
          {t(btnCloseLabel)}
        </Button>
      </div>
    </section>
  );
};

export default Confirm;
