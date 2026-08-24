import React, { useContext } from "react";
import { Heart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";

export default function UserWhilelist() {
  const { whishlist, addToWhishList } = useContext(CartContext);

  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];

  const productData = allproductData.filter((item) =>
    whishlist.includes(item?.id),
  );

  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <h1 className="text-[26px] font-[700] text-gray-900">Wishlist</h1>
        <p className="mt-[5px] text-[13px] text-gray-500">
          Products you've saved for later
        </p>
      </div>

      <div className="catDisplay">
        {productData.map((product) => (
          <div
            key={product.id}
            className="whishDeal group relative overflow-hidden rounded-[16px] border border-gray-200 bg-white transition duration-300 hover:-translate-y-[2px] hover:shadow-md"
          >
            <div className="flex h-[220px] items-center justify-center overflow-hidden bg-gray-50">
              <img
                src={product.images}
                alt={product.title}
                className="h-full w-full object-contain p-[15px] transition duration-300 group-hover:scale-[1.04]"
              />
            </div>

            <div className="absolute right-[12px] top-[12px]">
              <span
                onClick={() => addToWhishList(product.id)}
                className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-gray-100"
              >
                <Heart size={18} className="fill-red-500 text-red-500" />
              </span>
            </div>

            <div className="flex flex-col gap-[15px] px-[20px] py-[15px]">
              <div>
                <h1 className="truncate text-[13px] font-[500] text-gray-900">
                  {product.title}
                </h1>

                <h1 className="mt-[4px] text-[13px] font-[400] text-gray-500">
                  {product.brand}
                </h1>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div>
                  <h1 className="text-[15px] font-[600] text-gray-900">
                    ${product.actualPrice}
                  </h1>
                </div>

                <div className="ml-auto">
                  <button className="cursor-pointer rounded-[8px] border border-gray-200 px-[12px] py-[7px] text-[12px] font-[500] text-gray-700 transition hover:border-black hover:bg-black hover:text-white">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
