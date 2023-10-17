import { useTranslation } from "react-i18next";
import { ISearchInput } from "../interfaces";

const SearchInput: React.FC<ISearchInput> = ({ value, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-light-text dark:text-dark-text">
        search
      </span>
      <input
        className="input"
        name="search"
        placeholder={t("search.placeholder")}
        onChange={onChange}
        value={value}
        id="inputSearch"
      />
    </div>
  );
};

export default SearchInput;
