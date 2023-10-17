import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ISidebarNavItem } from "../../interfaces";

const SidebarNavItem: React.FC<ISidebarNavItem> = ({
  icon,
  label,
  to,
  handler,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {to && (
        <NavLink
          to={to}
          className={({ isActive }) => {
            return `${isActive ? "nav-item-active" : ""} nav-item`;
          }}
        >
          <span className="material-icons-outlined block">{icon}</span>
          <span className="hidden xl:block">{t(`sidebar.${label}`)}</span>
        </NavLink>
      )}

      {!to && (
        <button className="nav-item" onClick={handler}>
          <span className="material-icons-outlined block">{icon}</span>
          <span className="hidden xl:block">{t(`sidebar.${label}`)}</span>
        </button>
      )}
    </>
  );
};

export default SidebarNavItem;
