import { useTranslation } from "react-i18next";
import { useAuthCtx, useTheme } from "../../../hooks";
import { Card } from "../../../ui";

const DisplayContentTheme: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthCtx();
  const { updateTheme } = useTheme();

  const variants = {
    lightMode: !user?.isDarkMode
      ? "border-primary-primary text-primary-primary bg-light-default"
      : "",

    darkMode: user?.isDarkMode
      ? "dark:border-primary-primary dark:text-primary-primary dark:bg-dark-default"
      : "",
  };

  return (
    <Card>
      <h3 className="mb-6 font-bold text-light-title dark:text-dark-title">
        {t("settings.display.content.theme.label")}
      </h3>
      <div className="flex items-center gap-3">
        <div
          className={`display-item ${variants.lightMode}`}
          onClick={() => updateTheme(false)}
        >
          <span className="material-icons-outlined text-md">wb_sunny</span>
          {t("settings.display.content.theme.light")}
        </div>

        <div
          className={`display-item ${variants.darkMode}`}
          onClick={() => updateTheme(true)}
        >
          <span className="material-icons-outlined text-md">dark_mode</span>
          {t("settings.display.content.theme.dark")}
        </div>
      </div>
    </Card>
  );
};

export default DisplayContentTheme;
