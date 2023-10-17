import { useTranslation } from "react-i18next";
import { Card } from "../../../ui";
import { useAuthCtx, useLanguage } from "../../../hooks";
import { ar, en } from "../../../assets";

const DisplayContentLanguage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthCtx();
  const { updateLanguage } = useLanguage();

  const lang = (lang: string) => {
    return lang === user?.language
      ? "dark:border-primary-primary border-primary-primary dark:text-primary-primary text-primary-primary dark:bg-dark-default bg-light-default"
      : "";
  };

  return (
    <Card>
      <h3 className="mb-6 font-bold text-light-title dark:text-dark-title">
        {t("settings.display.content.lang.label")}
      </h3>

      <div className="flex items-center gap-3">
        <div
          className={`display-item ${lang("ar")}`}
          onClick={() => updateLanguage("ar")}
        >
          <img src={ar} alt="Arabic" width={24} height={24} />
          {t("settings.display.content.lang.ar")}
        </div>

        <div
          className={`display-item ${lang("en")}`}
          onClick={() => updateLanguage("en")}
        >
          <img src={en} alt="Arabic" width={24} height={24} />
          {t("settings.display.content.lang.en")}
        </div>
      </div>
    </Card>
  );
};

export default DisplayContentLanguage;
