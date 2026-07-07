import Skeleton from "react-loading-skeleton";

export default function SkeletonGrid() {
  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <Skeleton height={220} borderRadius={16} />

            <div className="p-3">
              <Skeleton height={18} width="80%" />

              <div className="mt-3">
                <Skeleton height={12} />
              </div>

              <div className="mt-2">
                <Skeleton height={12} width="60%" />
              </div>

              <div className="flex justify-between mt-4">
                <Skeleton width={70} height={34} borderRadius={20} />
                <Skeleton circle width={34} height={34} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
