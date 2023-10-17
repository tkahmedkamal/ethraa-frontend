import i18n from "../config/i18n";

const formatTimeDifference = (datetime: Date) => {
  const currentTime = new Date();
  const providedTime = new Date(datetime);
  const timeDifference =
    (currentTime.getTime() - providedTime.getTime()) / (1000 * 60);

  let result = "";
  const currentLang = i18n.language;

  switch (true) {
    case timeDifference < 1:
      result = i18n.t("datetime.few");
      break;

    case timeDifference < 60:
      result = textBasedOnLang(timeDifference, "minute", currentLang);
      break;

    case timeDifference < 1440:
      result = textBasedOnLang(timeDifference / 60, "hour", currentLang);
      break;

    case timeDifference < 10080:
      result = textBasedOnLang(timeDifference / 1440, "day", currentLang);
      break;

    default:
      result = providedTime.toLocaleDateString(currentLang, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }

  return result;
};

const textBasedOnLang = (
  differenceTime: number,
  timeText: string,
  lang: string,
) => {
  const en = `${Math.floor(differenceTime)} ${i18n.t(
    `datetime.${timeText}`,
  )} ${i18n.t("datetime.ago")}`;

  const ar = `${i18n.t("datetime.ago")} 
  ${Math.floor(differenceTime)}
  ${i18n.t(`datetime.${timeText}`)}`;

  return lang === "en" ? en : ar;
};

export default formatTimeDifference;
