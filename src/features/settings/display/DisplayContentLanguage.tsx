import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, Card, Input } from "../../../ui";
import { useAuthCtx, useLanguage } from "../../../hooks";
import { ar, en } from "../../../assets";

const DisplayContentLanguage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthCtx();
  const { updateLanguage, isLoading } = useLanguage();

  return (
    <Card>
      <h3 className="mb-6 font-bold text-light-title dark:text-dark-title">
        {t("settings.display.content.lang.label")}
      </h3>

      <Formik
        initialValues={{ language: user?.language }}
        onSubmit={(values) => updateLanguage(values.language as string)}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6">
            <div className="flex items-center gap-3">
              <label
                htmlFor="inputLangArabic"
                className={`display-item switch-lang`}
              >
                <Input
                  type="radio"
                  name="language"
                  value="ar"
                  id="inputLangArabic"
                  hidden
                  onChange={() => setFieldValue("language", "ar")}
                  checked={values.language === "ar"}
                />

                <img src={ar} alt="Arabic" width={24} height={24} />
                {t("settings.display.content.lang.ar")}
              </label>

              <label
                htmlFor="inputLangEnglish"
                className={`display-item switch-lang`}
              >
                <Input
                  type="radio"
                  name="language"
                  value="en"
                  id="inputLangEnglish"
                  hidden
                  onChange={() => setFieldValue("language", "en")}
                  checked={values.language === "en"}
                />

                <img src={en} alt="English" width={24} height={24} />
                {t("settings.display.content.lang.en")}
              </label>
            </div>

            <Button type="submit" loading={isLoading}>
              {t("button.updateLang")}
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default DisplayContentLanguage;
