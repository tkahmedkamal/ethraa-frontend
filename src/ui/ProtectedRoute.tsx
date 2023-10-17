import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren } from "../interfaces";
import useLoggedInUser from "../hooks/useLoggedInUser";
import { useAuthCtx } from "../hooks";

const ProtectedRoute: React.FC<IChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useLoggedInUser();
  const { isAuthenticated } = useAuthCtx();

  useEffect(() => {
    if (!user && !isAuthenticated && !isLoading) {
      navigate("/auth/login");
    }
  }, [user, isAuthenticated, isLoading, navigate]);

  if (user && isAuthenticated) return children;
};

export default ProtectedRoute;
