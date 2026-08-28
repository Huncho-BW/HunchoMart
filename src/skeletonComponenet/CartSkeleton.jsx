import React from "react";

export default function CartLeftSkeleton() {
  return (
    <div className="cartProducts animate-pulse">
      {[1, 2].map((item) => (
        <div key={item} className="cardBorder shadow-lg">
          <div className="cartProductInfo">
            {/* Product Image */}
            <div className="cartProductImage w-[110px] h-[110px] bg-gray-200 rounded"></div>

            <div className="cartProductContent">
              {/* Brand */}
              <div className="h-3 w-16 bg-gray-200 rounded mb-3"></div>

              {/* Product Name */}
              <div className="h-5 w-[180px] bg-gray-200 rounded mb-3"></div>

              {/* Size + Color */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-3 w-20 bg-gray-200 rounded"></div>

                <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              </div>

              {/* Quantity */}
              <div className="product-quantity">
                <div className="h-3 w-8 bg-gray-200 rounded mb-2"></div>

                <div className="quantity-box flex gap-5 items-center">
                  <div className="h-5 w-5 bg-gray-200 rounded"></div>

                  <div className="h-4 w-6 bg-gray-200 rounded"></div>

                  <div className="h-5 w-5 bg-gray-200 rounded"></div>
                </div>

                {/* Stock */}
                <div className="h-3 w-28 bg-gray-200 rounded mt-2"></div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="cartProductRight">
            <div className="priceBox">
              {/* Current Price */}
              <div className="h-5 w-16 bg-gray-200 rounded mb-2"></div>

              {/* Old Price */}
              <div className="h-3 w-12 bg-gray-200 rounded"></div>
            </div>

            {/* Actions */}
            <div className="cartActions flex gap-4">
              <div className="h-3 w-8 bg-gray-200 rounded"></div>

              <div className="h-3 w-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
