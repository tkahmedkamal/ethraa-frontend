import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useAuthCtx } from "./useAuthCtx";

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser, setIsAuthenticated } = useAuthCtx();

  const logout = () => {
    localStorage.removeItem("access_token");
    queryClient.removeQueries();
    setUser(null);
    setIsAuthenticated(false);
    navigate("/auth/login");
  };

  return { logout };
};

export default useLogout;
