import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthCtx = () => {
  const {
    user,
    isAuthenticated,
    theme,
    setUser,
    setTheme,
    setIsAuthenticated,
  } = useContext(AuthContext);

  return {
    user,
    isAuthenticated,
    theme,
    setUser,
    setTheme,
    setIsAuthenticated,
  };
};

export default useAuthCtx;
