import { useTranslation } from "react-i18next";
import { useAuthCtx, useTheme } from "../../../hooks";
import { Card } from "../../../ui";
import { IThemeMode } from "../../../interfaces";

const DisplayContentTheme: React.FC = () => {
  const { t } = useTranslation();
  const { setTheme, theme } = useAuthCtx();
  const { updateTheme } = useTheme();

  const handleSwitchTheme = (mode: IThemeMode) => {
    const isDarkMode = mode === "dark";

    setTheme(mode);

    if (theme !== mode) {
      updateTheme(isDarkMode);
    }
  };

  const variants = {
    lightMode:
      theme === "light"
        ? "border-primary-primary text-primary-primary bg-light-default"
        : "",

    darkMode:
      theme === "dark"
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
          onClick={() => handleSwitchTheme("light")}
        >
          <span className="material-icons-outlined text-md">wb_sunny</span>
          {t("settings.display.content.theme.light")}
        </div>

        <div
          className={`display-item ${variants.darkMode}`}
          onClick={() => handleSwitchTheme("dark")}
        >
          <span className="material-icons-outlined text-md">dark_mode</span>
          {t("settings.display.content.theme.dark")}
        </div>
      </div>
    </Card>
  );
};

export default DisplayContentTheme;
