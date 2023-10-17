import { IChildren } from "../interfaces";

const ErrorMessage: React.FC<IChildren> = ({ children }) => {
  return (
    <p className="mt-2 text-sm text-light-danger dark:text-dark-danger">
      {children}
    </p>
  );
};

export default ErrorMessage;
