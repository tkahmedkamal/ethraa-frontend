import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSkeletonTheme } from "../hooks";

const UserInfoSkeleton: React.FC = () => {
  const { theme } = useSkeletonTheme();

  return (
    <div className="space-y-8">
      <div className="!mt-8 flex flex-wrap items-center gap-6">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton circle width={128} height={128} />
          </SkeletonTheme>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-xl font-bold">
                <SkeletonTheme
                  baseColor={theme.base}
                  highlightColor={theme.highlight}
                >
                  <Skeleton width={150} height={10} />
                </SkeletonTheme>
              </h4>
              <p className="font-semibold">
                <SkeletonTheme
                  baseColor={theme.base}
                  highlightColor={theme.highlight}
                >
                  <Skeleton width={80} height={10} />
                </SkeletonTheme>
              </p>
            </div>
            <p className="font-semibold">
              <SkeletonTheme
                baseColor={theme.base}
                highlightColor={theme.highlight}
              >
                <Skeleton width={120} height={10} />
              </SkeletonTheme>
            </p>
            <div className="flex items-center gap-3">
              <SkeletonTheme
                baseColor={theme.base}
                highlightColor={theme.highlight}
              >
                <Skeleton width={79} height={38} />
              </SkeletonTheme>
              <SkeletonTheme
                baseColor={theme.base}
                highlightColor={theme.highlight}
              >
                <Skeleton width={79} height={38} />
              </SkeletonTheme>
            </div>
          </div>
          <div className="h-12 w-12 rounded-full">
            <span className="material-icons-outlined flex h-12 w-12 items-center justify-center rounded-full">
              <SkeletonTheme
                baseColor={theme.base}
                highlightColor={theme.highlight}
              >
                <Skeleton circle width={48} height={48} />
              </SkeletonTheme>
            </span>
          </div>
        </div>
      </div>

      <ul className="space-y-4 rounded-2xl">
        <li className="flex items-center gap-3 font-semibold">
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton width={200} height={10} />
          </SkeletonTheme>
        </li>

        <li className="font-semibold">
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton width={160} height={10} />
          </SkeletonTheme>
        </li>
        <li className="font-semibold">
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton width={160} height={10} />
          </SkeletonTheme>
        </li>
      </ul>
    </div>
  );
};

export default UserInfoSkeleton;
