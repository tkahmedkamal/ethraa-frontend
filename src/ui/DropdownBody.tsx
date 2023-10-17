import { motion } from "framer-motion";
import { opacityVariants } from "../helpers/motion";
import { IChildren } from "../interfaces";

const DropdownBody: React.FC<IChildren> = ({ children }) => {
  return (
    <motion.ul
      variants={opacityVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="divide-y divide-light-divider rounded-xl bg-light-paper text-light-title drop-shadow-sharp dark:divide-dark-divider dark:bg-dark-paper dark:text-dark-title"
    >
      {children}
    </motion.ul>
  );
};

export default DropdownBody;
