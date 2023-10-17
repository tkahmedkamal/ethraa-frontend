import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IPageTitle } from "../interfaces";
import { useAuthCtx } from "../hooks";

const PageTitle: React.FC<IPageTitle> = ({ label }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { user } = useAuthCtx();

  useEffect(() => {
    document.title = `${t("app")} — ${t(label)}`;
  }, [label, t]);

  return (
    <>
      {pathname !== "/" && (
        <div
          className="flex items-center gap-3 border-b border-light-divider pb-6 dark:border-dark-divider"
          onClick={() => navigate(-1)}
        >
          <span
            className={`material-icons-outlined flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-3xl text-light-title transition duration-500 hover:bg-light-paper dark:text-dark-title dark:hover:bg-dark-paper ${
              user?.language === "en" ? "rotate-180" : ""
            }`}
          >
            arrow_right_alt
          </span>
          <p className="text-xl font-bold text-light-title dark:text-dark-title">
            {t(label)}
          </p>
        </div>
      )}
    </>
  );
};

export default PageTitle;
