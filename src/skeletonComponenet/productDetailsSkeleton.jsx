export default function ProductDetailsSkeleton() {
  return (
    <>
      <div className="product-details animate-pulse">
        {/* Product Gallery */}
        <div className="product-gallery">
          <div className="w-full h-[500px] bg-gray-200 rounded-md"></div>

          <div className="product-type mt-5">
            <div className="h-5 w-[70%] bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info">
          {/* Brand + Wishlist */}
          <div className="product-header flex justify-between items-center">
            <div className="h-3 w-20 bg-gray-200 rounded"></div>

            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          </div>

          {/* Product Title */}
          <div className="mt-4">
            <div className="h-10 w-[90%] bg-gray-200 rounded"></div>

            {/* Rating */}
            <div className="flex items-center gap-5 mt-4">
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="w-[14px] h-[14px] bg-gray-200 rounded"
                  ></div>
                ))}
              </div>

              <div className="h-4 w-28 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Price */}
          <div className="product-price flex items-center gap-4 mt-6">
            <div className="h-9 w-24 bg-gray-200 rounded"></div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-12 bg-gray-200 rounded"></div>
          </div>

          {/* Divider */}
          <div className="divider my-6">
            <div className="h-px w-full bg-gray-200"></div>
          </div>

          {/* Color */}
          <div className="product-color">
            <div className="section-header">
              <div className="h-4 w-10 bg-gray-200 rounded mb-3"></div>

              <div className="flex gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full bg-gray-200"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Size */}
          <div className="product-size mt-6">
            <div className="flex justify-between">
              <div className="h-4 w-8 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>

            <div className="flex gap-2 mt-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-10 w-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="product-quantity mt-6">
            <div className="h-4 w-8 bg-gray-200 rounded mb-3"></div>

            <div className="flex gap-5 items-center">
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
              <div className="h-4 w-5 bg-gray-200 rounded"></div>
              <div className="h-8 w-8 bg-gray-200 rounded"></div>
            </div>

            <div className="h-3 w-32 bg-gray-200 rounded mt-3"></div>
          </div>

          {/* Actions */}
          <div className="product-actions flex gap-3 mt-6">
            <div className="h-12 flex-1 bg-gray-200 rounded"></div>
            <div className="h-12 flex-1 bg-gray-200 rounded"></div>
          </div>

          {/* Benefits */}
          <div className="product-benefits flex justify-between mt-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
                <div className="h-3 w-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          <div className="divider my-6">
            <div className="h-px w-full bg-gray-200"></div>
          </div>

          {/* Delivery */}
          <div className="delivery-info">
            <div className="h-5 w-40 bg-gray-200 rounded mb-3"></div>

            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-[90%] bg-gray-200 rounded"></div>
              <div className="h-3 w-[70%] bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="divider my-6">
            <div className="h-px w-full bg-gray-200"></div>
          </div>

          {/* Specifications */}
          <div className="space-y-5">
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
            <div className="h-5 w-28 bg-gray-200 rounded"></div>
          </div>

          <div className="divider my-6">
            <div className="h-px w-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <section className="p-[40px] animate-pulse">
        <div className="h-px w-full bg-gray-200 mb-8"></div>

        <div className="flex flex-col gap-[20px]">
          {/* Review Header */}
          <div>
            <div className="h-6 w-36 bg-gray-200 rounded"></div>
          </div>

          {/* Overall Rating */}
          <div>
            <div className="flex items-center gap-5">
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="h-5 w-5 bg-gray-200 rounded"></div>
                ))}
              </div>

              <div className="h-5 w-36 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="review-display grid gap-4">
            {[1, 2, 3].map((review) => (
              <div key={review} className="border p-5">
                <div className="flex gap-4 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className="h-4 w-4 bg-gray-200 rounded"
                    ></div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="h-4 w-[90%] bg-gray-200 rounded"></div>
                  <div className="h-4 w-[70%] bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
