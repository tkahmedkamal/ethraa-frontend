import { useAuthCtx } from ".";

const useSkeletonTheme = () => {
  const { theme: themeMode } = useAuthCtx();

  const theme = {
    base: themeMode === "dark" ? "#282e3b" : "#d9d9d9",
    highlight: themeMode === "dark" ? "#1b202b" : "#e9e9e9",
  };

  return { theme };
};

export default useSkeletonTheme;
