import { SettingsList } from "../../features/settings";
import PageTitle from "../../ui/PageTitle";

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageTitle label="sidebar.settings" />
      <SettingsList />
    </div>
  );
};

export default SettingsPage;
