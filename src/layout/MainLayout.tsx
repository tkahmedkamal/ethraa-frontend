import { Outlet } from "react-router-dom";
import SidebarNav from "./sidebarNav/SidebarNav";
import SidebarStats from "./SidebarStats";
import { useAuthCtx } from "../hooks";
import { AccountAlert } from "../ui";

const MainLayout: React.FC = () => {
  const { user, isAuthenticated } = useAuthCtx();

  return (
    <>
      {isAuthenticated && !user?.isActiveAccount && <AccountAlert />}
      <main className="flex h-screen sm:container sm:mx-auto xl:max-w-[1200px]">
        <SidebarNav />
        <div className="w-full overflow-y-auto border-x border-light-divider p-[18px]  dark:border-dark-divider sm:w-[600px] lg:w-1/2">
          <Outlet />
        </div>
        <SidebarStats />
      </main>
    </>
  );
};

export default MainLayout;
