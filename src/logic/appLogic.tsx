import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuthCtx } from "../hooks";

const useAppLogic = () => {
  const { i18n } = useTranslation();
  const { user } = useAuthCtx();

  useEffect(() => {
    if (user && user?.isDarkMode) {
      document.body.parentElement?.classList.add("dark");
    } else {
      document.body.parentElement?.classList.remove("dark");
    }
  }, [user]);

  useEffect(() => {
    if (user && user?.language === "en") {
      document.body.parentElement?.setAttribute("dir", "ltr");
      document.body.parentElement?.setAttribute("lang", "en");
      i18n.changeLanguage("en");
    } else {
      document.body.parentElement?.setAttribute("dir", "rtl");
      document.body.parentElement?.setAttribute("lang", "ar");
      i18n.changeLanguage("ar");
    }
  }, [i18n, user]);
};

export default useAppLogic;
