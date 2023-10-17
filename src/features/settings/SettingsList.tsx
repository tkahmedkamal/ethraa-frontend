import SettingsListItem from "./SettingsListItem";

const SettingsList: React.FC = () => {
  return (
    <ul className="space-y-8">
      <SettingsListItem
        to="password"
        label="settings.updatePassword.label"
        text="settings.updatePassword.text"
        icon="key"
      />

      <SettingsListItem
        to="display"
        label="settings.display.label"
        text="settings.display.text"
        icon="laptop_windows"
      />

      <SettingsListItem
        to="deactivate"
        label="settings.deactivate.label"
        text="settings.deactivate.text"
        icon="heart_broken"
      />
    </ul>
  );
};

export default SettingsList;
