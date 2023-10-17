import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IFollowCountButton } from "../interfaces";

const FollowCountButton: React.FC<IFollowCountButton> = ({
  label,
  to,
  count,
}) => {
  const { t } = useTranslation();

  return (
    <Link
      to={to}
      className="block rounded-full border border-light-divider bg-light-paper px-5 py-2.5 text-xs font-bold text-primary-primary transition-colors duration-500 hover:border-primary-primary dark:border-dark-divider dark:bg-dark-paper"
    >
      {count} {t(label)}
    </Link>
  );
};

export default FollowCountButton;
