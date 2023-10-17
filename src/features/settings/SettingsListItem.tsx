import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ISettingsListItem } from "../../interfaces";
import { useAuthCtx } from "../../hooks";

const SettingsListItem: React.FC<ISettingsListItem> = ({
  to,
  label,
  text,
  icon,
}) => {
  const { t } = useTranslation();
  const { user } = useAuthCtx();

  return (
    <li>
      <Link
        to={`/settings/${to}`}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-8">
          <span className="material-icons-outlined text-primary-primary">
            {icon}
          </span>
          <div className="space-y-1">
            <h4 className="font-semibold text-light-title dark:text-dark-title">
              {t(label)}
            </h4>
            <p className="text-sm font-medium text-light-text dark:text-dark-text">
              {t(text)}
            </p>
          </div>
        </div>
        <span
          className={`material-icons-outlined text-light-text dark:text-dark-text ${
            user?.language === "en" ? "rotate-180" : ""
          }`}
        >
          navigate_before
        </span>
      </Link>
    </li>
  );
};

export default SettingsListItem;
