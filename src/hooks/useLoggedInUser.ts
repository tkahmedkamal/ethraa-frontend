import { useQuery, useQueryClient } from "react-query";
import { useAuthCtx } from ".";
import { getLoggedInUserApi } from "../services/userApi";

const useLoggedInUser = () => {
  const queryClient = useQueryClient();
  const { user: loggedInUser } = useAuthCtx();

  const { setUser, setIsAuthenticated } = useAuthCtx();
  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getLoggedInUserApi(loggedInUser?.language),
    retry: false,

    onSuccess: (user) => {
      if (user) {
        setUser(user?.data);
        setIsAuthenticated(true);
      }
    },
    onError: () => {
      queryClient.setQueryData(["user"], null);

      setUser(null);
      setIsAuthenticated(false);
    },
  });

  return {
    user,
    isError,
    isLoading,
  };
};

export default useLoggedInUser;
