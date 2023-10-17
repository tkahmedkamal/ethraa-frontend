import { useTranslation } from "react-i18next";
import { TabItem } from ".";
import { ITabs } from "../interfaces";
import { useFilter } from "../hooks";

const Tabs: React.FC<ITabs> = ({ tabs = [] }) => {
  const { term, handleClick } = useFilter("posts");
  const { t } = useTranslation();

  const tabItems = tabs.map(({ dataset, label }) => (
    <TabItem
      key={dataset}
      dataset={dataset}
      term={term}
      handleClick={handleClick}
    >
      {t(label)}
    </TabItem>
  ));

  return (
    <ul className="flex items-center divide-x divide-x-reverse divide-light-divider rounded-2xl border border-light-divider bg-light-paper px-2 py-3.5 text-sm font-bold text-light-text dark:divide-dark-divider dark:border-dark-divider dark:bg-dark-paper dark:text-dark-text">
      {tabItems}
    </ul>
  );
};

export default Tabs;
