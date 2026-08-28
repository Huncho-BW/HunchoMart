import React from "react";

export default function HeartSkeleton() {
  return (
    <div className="catDisplay animate-pulse">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item}>
          <div className="tranding">
            {/* Product Image */}
            <div className="w-full h-[250px] bg-gray-200"></div>

            <div className="trending-content p-3">
              {/* Title */}
              <div className="h-4 w-[80%] bg-gray-200 rounded mb-3"></div>

              {/* Brand */}
              <div className="h-4 w-[45%] bg-gray-200 rounded mb-3"></div>

              {/* Price Row */}
              <div className="flex gap-2 items-center">
                <div className="h-4 w-16 bg-gray-200 rounded"></div>

                <div className="h-4 w-14 bg-gray-200 rounded"></div>

                <div className="ml-auto">
                  <div className="h-6 w-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Top Overlay */}
            <div className="absolute top-0 left-0 flex w-full justify-between p-2">
              {/* Discount */}
              <div className="h-4 w-10 bg-gray-200 rounded"></div>

              {/* Heart */}
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
