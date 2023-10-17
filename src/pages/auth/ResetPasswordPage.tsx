import { ResetPasswordForm } from "../../features/auth/resetPassword";
import { useAuthRedirect } from "../../hooks";

const ResetPasswordPage: React.FC = () => {
  useAuthRedirect();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
