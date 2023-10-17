import { DisplayContent } from "../../features/settings/display";
import { PageTitle } from "../../ui";

const DisplayPage = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="settings.display.label" />
      <DisplayContent />
    </div>
  );
};

export default DisplayPage;
