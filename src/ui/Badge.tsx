import { IBadge } from "../interfaces";

export const Badge: React.FC<IBadge> = ({ label }) => {
  return (
    <div className="rounded-full border border-light-divider px-3 py-2 text-xs font-bold text-primary-primary dark:border-dark-divider">
      {label}
    </div>
  );
};

export default Badge;
