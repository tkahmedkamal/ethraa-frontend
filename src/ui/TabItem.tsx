import { ITabItem } from "../interfaces";

const TabItem: React.FC<ITabItem> = ({
  dataset,
  term,
  handleClick,
  children,
}) => {
  return (
    <li
      onClick={handleClick}
      data-tab={dataset}
      className={`flex-1 cursor-pointer text-center transition-colors duration-500 hover:text-primary-primary ${
        term === dataset ? "text-primary-primary" : ""
      }`}
    >
      {children}
    </li>
  );
};

export default TabItem;
