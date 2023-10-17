import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ICardTitled } from "../interfaces";

const CardTitled: React.FC<ICardTitled> = ({ label, to, children }) => {
  const { t } = useTranslation();

  return (
    <section className="card">
      <header className="mb-6 flex items-center justify-between">
        <h4 className="text-sm font-bold text-light-title dark:text-dark-title">
          {t(`suggestion.${label}`)}
        </h4>
        {to && (
          <Link
            to={to}
            className="text-xs font-bold text-primary-primary transition-colors duration-500 hover:text-primary-action"
          >
            {t("global.all")}
          </Link>
        )}
      </header>
      {children}
    </section>
  );
};

export default CardTitled;
