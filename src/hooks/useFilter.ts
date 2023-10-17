import { useSearchParams } from "react-router-dom";

const useFilter = (param: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const term = searchParams.get(param) || "all";

  const handleClick = (event: React.MouseEvent) => {
    const value = (event.target as HTMLElement).dataset.tab;
    searchParams.set(param, value as string);
    setSearchParams(searchParams);
  };

  return {
    term,
    handleClick,
  };
};

export default useFilter;
