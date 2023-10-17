import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSkeletonTheme } from "../hooks";
import { Size } from "../enums";
import { IUserItemSkeleton } from "../interfaces";

const UserItemSkeleton: React.FC<IUserItemSkeleton> = ({
  size = Size.SMALL,
}) => {
  const { theme } = useSkeletonTheme();

  const variants = {
    imageWidthAndHeight: size === Size.SMALL ? 40 : 48,
    text: size === Size.SMALL ? "text-sm" : "text-base",
    buttonWidth: size === Size.SMALL ? 64 : 90,
    buttonHeight: size === Size.SMALL ? 24 : 36,
  };

  return (
    <li className="relative flex items-center justify-between">
      <div className="flex gap-2">
        <SkeletonTheme baseColor={theme.base} highlightColor={theme.highlight}>
          <Skeleton
            circle
            width={variants.imageWidthAndHeight}
            height={variants.imageWidthAndHeight}
          />
        </SkeletonTheme>
        <div className="space-y-1">
          <h5 className={`font-bold ${variants.text}`}>
            <SkeletonTheme
              baseColor={theme.base}
              highlightColor={theme.highlight}
            >
              <Skeleton width={110} height={10} />
            </SkeletonTheme>
          </h5>
          <p className={`font-normal ${variants.text}`}>
            <SkeletonTheme
              baseColor={theme.base}
              highlightColor={theme.highlight}
            >
              <Skeleton width={60} height={10} />
            </SkeletonTheme>
          </p>
        </div>
      </div>
      <SkeletonTheme baseColor={theme.base} highlightColor={theme.highlight}>
        <Skeleton
          width={variants.buttonWidth}
          height={variants.buttonHeight}
          borderRadius={200}
        />
      </SkeletonTheme>
    </li>
  );
};

export default UserItemSkeleton;
