import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSkeletonTheme } from "../hooks";

const PostSkeleton: React.FC = () => {
  const { theme } = useSkeletonTheme();

  return (
    <section className="card">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full">
            <SkeletonTheme
              baseColor={theme.base}
              highlightColor={theme.highlight}
            >
              <Skeleton circle width={40} height={40} />
            </SkeletonTheme>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-bold">
              <SkeletonTheme
                baseColor={theme.base}
                highlightColor={theme.highlight}
              >
                <Skeleton width={140} height={8} />
              </SkeletonTheme>
            </div>
            <div className="relative flex items-center gap-2">
              <p className="text-xs font-medium">
                <SkeletonTheme
                  baseColor={theme.base}
                  highlightColor={theme.highlight}
                >
                  <Skeleton width={60} height={8} />
                </SkeletonTheme>
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton width={20} height={8} />
          </SkeletonTheme>
        </div>
      </div>

      <p className="py-5 font-extrabold leading-loose">
        <SkeletonTheme baseColor={theme.base} highlightColor={theme.highlight}>
          <Skeleton width={"100%"} height={8} />
          <Skeleton width={"50%"} height={8} />
        </SkeletonTheme>
      </p>

      <div className="flex items-center justify-between">
        <SkeletonTheme baseColor={theme.base} highlightColor={theme.highlight}>
          <Skeleton
            width={84}
            height={34}
            className="rounded-full px-3 py-2 text-xs font-bold"
          />
        </SkeletonTheme>

        <div className="flex items-center gap-2">
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton
              width={64}
              height={34}
              className="rounded-full px-3 py-2 text-xs font-bold"
            />
          </SkeletonTheme>
          <SkeletonTheme
            baseColor={theme.base}
            highlightColor={theme.highlight}
          >
            <Skeleton
              width={64}
              height={34}
              className="rounded-full px-3 py-2 text-xs font-bold"
            />
          </SkeletonTheme>
        </div>
      </div>
    </section>
  );
};

export default PostSkeleton;
