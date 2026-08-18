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
    <div>
      <div>
        <h1>WishList </h1>
      </div>
      <div className="catDisplay ">
        {productData.map((product) => (
          <div className="flashDeal relative">
            <img src="" alt="" />
            <div className="absolute top-[5%] right-[10%]">
              <span>
                <Heart />
              </span>
            </div>
            <div className="flex flex-col gap-[15px] px-[20px] py-[10px]">
              <div>
                <h1 className="text-[12px]">name</h1>
                <h1 className="text-[14px] font-[300]">Brand</h1>
              </div>

              <div className="flex gap-2 justify-between">
                <div>
                  <h1 className="text-[14px] font-[300]">$250</h1>
                </div>
                <div className="ml-[auto] border p-1">
                  <h1 className="text-[12px] ">Veiw</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
