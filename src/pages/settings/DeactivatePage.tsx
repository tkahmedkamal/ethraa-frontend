import { DeactivateContent } from "../../features/settings/deactivate";
import PageTitle from "../../ui/PageTitle";

const DeactivatePage: React.FC = () => {
  return (
    <div className="space-y-2">
      <PageTitle label="settings.deactivate.label" />
      <DeactivateContent />
    </div>
  );
};

export default DeactivatePage;
