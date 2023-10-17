import { useTranslation } from "react-i18next";
import { IUserInfoDetails } from "../../interfaces";

const UserInfoDetails: React.FC<IUserInfoDetails> = ({
  quoteCount,
  facebook,
  twitter,
}) => {
  const { t } = useTranslation();

  return (
    <ul className="space-y-4 rounded-2xl bg-light-paper p-6 dark:bg-dark-paper">
      <li className="flex items-center gap-3 font-semibold text-light-text dark:text-dark-text">
        <span className="material-icons-outlined">format_quote</span>
        {quoteCount} {t("global.post")}
      </li>
      {facebook && (
        <li className="font-semibold text-light-text dark:text-dark-text">
          <a
            href={`https://www.facebook.com/${facebook}`}
            className="flex items-center gap-3"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-light-text dark:fill-dark-text"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
            </svg>
            {facebook}
          </a>
        </li>
      )}
      {twitter && (
        <li className="font-semibold text-light-text dark:text-dark-text">
          <a
            href={`https://www.twitter.com/${twitter}`}
            className="flex items-center gap-3"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-light-text dark:fill-dark-text"
            >
              <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
            </svg>
            {twitter}@
          </a>
        </li>
      )}
    </ul>
  );
};

export default UserInfoDetails;
