import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getWishlistProducts = async (ids) => {
  const result = await axios.get(
    "https://huncho-mart-api.onrender.com/api/products",
    {
      params: {
        ids: ids.join(","),
        limit: ids.length,
      },
    },
  );

  return result.data.products;
};

export default function HeartWish() {
  const { whishlist, addToWhishList } = useContext(CartContext);

  const { data: productData = [], isLoading } = useQuery({
    queryKey: ["wishlistProducts", whishlist],
    queryFn: () => getWishlistProducts(whishlist),
    enabled: whishlist.length > 0,
  });

  if (isLoading) {
    return <div>Loading wishlist...</div>;
  }

  return (
    <div className="p-[40px] flex flex-col flex-wrap justify-center">
      <div className="flex justify-center">
        <h1>Whish List</h1>
      </div>

      <div className="catDisplay">
        {productData.map((product) => (
          <div key={product.id}>
            <NavLink to={`/product/${product.id}`}>
              <div className="tranding">
                <img src={product?.images?.[0] || product?.image} alt="" />

                <div className="trending-content p-3">
                  <div>
                    <h1 className="text-[12px]">{product?.title}</h1>
                  </div>

                  <div>
                    <h1 className="text-[14px] font-[300]">{product?.brand}</h1>
                  </div>

                  <div className="flex gap-2">
                    <div>
                      <h1 className="text-[14px] font-[400]">
                        {product?.currentPrices}
                      </h1>
                    </div>

                    <div>
                      <h1 className="text-[14px] font-[300]">
                        {product?.price}
                      </h1>
                    </div>

                    <div className="ml-[auto] border p-1">
                      <h1 className="text-[12px]">{product?.discount || ""}</h1>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 flex w-full justify-between p-2">
                  <div>
                    <h1 className="text-[12px]">
                      {product?.discountPercentage} %
                    </h1>
                  </div>

                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToWhishList(product?.id);
                      }}
                    >
                      <Heart />
                    </button>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
