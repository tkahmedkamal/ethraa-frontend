import { useTranslation } from "react-i18next";
import { IDeactivateContentItem } from "../../../interfaces";

const DeactivateContentItem: React.FC<IDeactivateContentItem> = ({
  label,
  text,
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2 py-4">
      <h2 className="text-lg font-bold text-light-title dark:text-dark-title">
        {t(label)}
      </h2>
      <p className="text-md leading-relaxed text-light-text dark:text-dark-text">
        {t(text)}
      </p>
    </div>
  );
};

export default DeactivateContentItem;
