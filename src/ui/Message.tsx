import { useTranslation } from "react-i18next";
import { IMessage } from "../interfaces";

const Message: React.FC<IMessage> = ({ message, prefix, expand }) => {
  const { t } = useTranslation();

  return (
    <p
      className={`text-lg text-light-text dark:text-dark-text ${
        expand ? "py-6" : "py-0"
      }`}
    >
      {prefix} {t(message)}
    </p>
  );
};

export default Message;
