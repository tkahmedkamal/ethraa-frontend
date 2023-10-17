import { useRef } from "react";
import { useParams } from "react-router-dom";
import { AvatarPlaceholder } from "../../assets";
import { useAuthCtx } from "../../hooks";
import { LoadingIcon } from "../../ui";
import useUploadAvatar from "./useUploadAvatar";
import { IUserInfoAvatar } from "../../interfaces";

const UserInfoAvatar: React.FC<IUserInfoAvatar> = ({ alt, avatar }) => {
  const { username } = useParams();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { user } = useAuthCtx();
  const { uploadAvatar, isLoading: isUploading } = useUploadAvatar();

  const handleUploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      username,
      file: event.target.files?.[0],
    };

    uploadAvatar(data, {
      onSettled: () => {
        audioRef.current?.play();
        event.target.value = "";
      },
    });
  };

  return (
    <>
      <div className="group relative h-32 w-32 overflow-hidden rounded-full">
        <img
          src={avatar !== "avatar-placeholder" ? avatar : AvatarPlaceholder}
          alt={alt}
        />
        {username === user?.username && (
          <label className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-common-black/60 text-common-white opacity-0 transition-all duration-500 group-hover:opacity-100">
            <input
              type="file"
              hidden
              id="inputAvatar"
              onChange={handleUploadAvatar}
            />
            <span className="material-icons-outlined text-4xl">image</span>
          </label>
        )}
        {isUploading && (
          <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-common-black/60 text-common-white transition-all duration-500">
            <LoadingIcon />
          </div>
        )}
      </div>

      <audio ref={audioRef}>
        <source src="share-sound.mp3" />
      </audio>
    </>
  );
};

export default UserInfoAvatar;
