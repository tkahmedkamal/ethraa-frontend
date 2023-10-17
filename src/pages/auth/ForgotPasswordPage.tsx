import { ForgotPasswordForm } from "../../features/auth/forgotPassword";
import { useAuthRedirect } from "../../hooks";

const ForgotPasswordPage: React.FC = () => {
  useAuthRedirect();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
