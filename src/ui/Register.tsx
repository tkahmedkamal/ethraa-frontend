import { useTranslation } from "react-i18next";
import { Logo, Card } from ".";
import { IRegister } from "../interfaces";

const Register: React.FC<IRegister> = ({ label, children }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center">
        <Logo className="h-40 w-40" visible />
      </div>
      <Card outlined>
        <h2 className="mb-6 text-lg font-bold text-light-title dark:text-dark-title">
          {t(label)}
        </h2>
        {children}
      </Card>
    </>
  );
};

export default Register;
