import { Link } from "react-router-dom";
import { Logo } from "../../ui";
import SidebarNavItem from "./SidebarNavItem";
import { useAuthCtx, useLogout } from "../../hooks";
import { Role } from "../../enums";

const SidebarNav = () => {
  const { user } = useAuthCtx();
  const { logout } = useLogout();

  return (
    <aside className="w-20 space-y-10 p-[18px] xl:w-1/5">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="space-y-2 xl:space-y-5">
        <SidebarNavItem to="/" icon="home" label="home" />
        <SidebarNavItem
          to={`/${user?.username}`}
          icon="person_outline"
          label="profile"
        />
        <SidebarNavItem
          to="/bookmarks"
          icon="bookmark_border"
          label="bookmarks"
        />
        <SidebarNavItem to="/search" icon="search" label="search" />
        <SidebarNavItem to="/settings" icon="settings" label="settings" />
        {user?.role === Role.ADMIN && (
          <SidebarNavItem to="/dashboard" icon="grid_view" label="dashboard" />
        )}
        <SidebarNavItem icon="logout" label="logout" handler={logout} />
      </ul>
    </aside>
  );
};

export default SidebarNav;
