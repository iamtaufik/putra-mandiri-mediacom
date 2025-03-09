const ReviewSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg animate-pulse">
      <div className="flex items-center mb-4">
        {/* Skeleton Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
        <div>
          {/* Skeleton Name */}
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton Text */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>

      {/* Skeleton Rating */}
      <div className="mt-4 flex items-center gap-x-2">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-6 h-6 bg-gray-300 rounded"></div>
          ))}
        </div>
        <div className="w-16 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton