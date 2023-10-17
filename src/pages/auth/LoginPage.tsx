import { LoginForm } from "../../features/auth/login";
import { useAuthRedirect } from "../../hooks";

const LoginPage: React.FC = () => {
  useAuthRedirect();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
