import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ITextLink } from "../interfaces";

const TextLink: React.FC<ITextLink> = ({ to, label }) => {
  const { t } = useTranslation();

  return (
    <Link to={to} className="mx-1.5 text-primary-primary">
      {t(label)}
    </Link>
  );
};

export default TextLink;
