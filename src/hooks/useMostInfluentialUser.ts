import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { getMosInfluentialUserApi } from "../services/userApi";
import { useAuthCtx } from ".";

const useMostInfluentialUser = () => {
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { data: users, isLoading } = useQuery({
    queryKey: ["most-influential"],
    queryFn: () => getMosInfluentialUserApi(lang),

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    users,
    isLoading,
  };
};

export default useMostInfluentialUser;
