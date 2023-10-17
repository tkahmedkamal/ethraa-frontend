import { useTranslation } from "react-i18next";
import { IDropdownItem } from "../interfaces";

const DropdownItem: React.FC<IDropdownItem> = ({
  label,
  icon,
  large,
  handler,
}) => {
  const { t } = useTranslation();

  return (
    <li
      className={`flex cursor-pointer items-center gap-2 px-6 py-2 transition-colors duration-500 hover:text-primary-primary ${
        large ? "w-44 text-lg" : ""
      }`}
      onClick={handler}
    >
      <span
        className={`material-icons-outlined ${large ? "text-xl" : "text-sm"}`}
      >
        {icon}
      </span>
      {t(label)}
    </li>
  );
};

export default DropdownItem;
