import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { uploadUserAvatarApi } from "../../services/userApi";
import { IUploadAvatar } from "../../interfaces";
import { useAuthCtx } from "../../hooks";

const useUploadAvatar = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: uploadAvatar, isLoading } = useMutation({
    mutationFn: (data: IUploadAvatar) => uploadUserAvatarApi(data, lang),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["posts", user?.username] });
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    uploadAvatar,
    isLoading,
  };
};

export default useUploadAvatar;
