import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { getUserApi } from "../services/userApi";
import { useAuthCtx } from ".";

const useUser = (username: string) => {
  const { user: loggedInUser } = useAuthCtx();

  const lang = <string>loggedInUser?.language;

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserApi(username, lang),

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    user,
    isLoading,
  };
};

export default useUser;
