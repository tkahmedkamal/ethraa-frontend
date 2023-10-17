import { SignupForm } from "../../features/auth/signup";
import { useAuthRedirect } from "../../hooks";

const SignupPage: React.FC = () => {
  useAuthRedirect();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
