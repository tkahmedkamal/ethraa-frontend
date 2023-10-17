import { useTranslation } from "react-i18next";
import { Button, PageTitle } from "../ui";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle label={t("notFound.title")} />

      <div className="flex h-screen flex-col items-center justify-center gap-y-7 text-center">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-light-title dark:text-dark-title">
            {t("notFound.title")}
          </h1>
          <p className="text-lg font-medium text-light-text dark:text-dark-text">
            {t("notFound.text")}
          </p>
        </div>

        <Button to="/">{t("button.homePage")}</Button>
      </div>
    </>
  );
};

export default NotFoundPage;
