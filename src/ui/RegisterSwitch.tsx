import { IChildren } from "../interfaces";

const RegisterSwitch: React.FC<IChildren> = ({ children }) => {
  return (
    <p className="mt-6 text-sm text-light-text dark:text-dark-text">
      {children}
    </p>
  );
};

export default RegisterSwitch;
