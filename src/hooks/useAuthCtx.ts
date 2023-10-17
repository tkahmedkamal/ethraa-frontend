import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthCtx = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  return {
    user,
    isAuthenticated,
    setUser,
    setIsAuthenticated,
  };
};

export default useAuthCtx;
