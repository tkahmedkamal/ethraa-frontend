import { UpdatePasswordForm } from "../../features/settings/updatePassword";
import PageTitle from "../../ui/PageTitle";

const UpdatePasswordPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="settings.updatePassword.label" />
      <div className="space-y-6">
        <UpdatePasswordForm />
      </div>
    </div>
  );
};

export default UpdatePasswordPage;
