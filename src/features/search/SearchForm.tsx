import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks";
import { SearchInput } from "../../ui";

const SearchForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState<string>(
    () => searchParams.get("search") || "",
  );
  const searchTermDebounceValue = useDebounce(term, 500);

  useEffect(() => {
    searchParams.set("search", searchTermDebounceValue);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, searchTermDebounceValue]);

  return <SearchInput value={term} onChange={(e) => setTerm(e.target.value)} />;
};

export default SearchForm;
