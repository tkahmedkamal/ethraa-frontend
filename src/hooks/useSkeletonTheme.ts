import { useAuthCtx } from ".";

const useSkeletonTheme = () => {
  const { user } = useAuthCtx();

  const theme = {
    base: user?.isDarkMode ? "#282e3b" : "#d9d9d9",
    highlight: user?.isDarkMode ? "#1b202b" : "#e9e9e9",
  };

  return { theme };
};

export default useSkeletonTheme;
