import React from "react";
import fashion from "../assets/fashion.webp";
import { product } from "../data/product";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { Star } from "lucide-react";
export default function ProductDetails() {
  const { id } = useParams();
  const productDetailsData = Number(id);
  console.log("id", productDetailsData);
  const allProductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];

  console.log("all product", allProductData);

  const productData = allProductData.find(
    (item) => item?.id === productDetailsData,
  );
  console.log(" product data", productData);

  return (
    <>
      <div className="product-details">
        <div className="product-gallery">
          <img
            src={productData?.images?.[0] || productData?.image}
            alt=""
            className="product-image"
          />

          <div className="product-type">
            <h1>{productData?.title}</h1>
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1>{productData?.brand}</h1>
            <span>
              <Heart />
            </span>
          </div>
          <div>
            <h1>{productData?.title}</h1>
            <div className="flex items-center gap-5">
              {" "}
              <div className="flex gap-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400"
                    fill={
                      star <= Math.round(productData?.rating?.rate)
                        ? "gold"
                        : "none"
                    }
                  />
                ))}
              </div>
              <div>
                <h1>
                  {productData?.rating?.rate}{" "}
                  {`(${productData?.rating.count} reviews)`}
                </h1>
              </div>
            </div>
          </div>
          <div className="product-price">
            <h1>{productData?.price}</h1>
            <h1>{productData?.actaulPrice}</h1>
            <h1>{productData?.discountPercentage}</h1>
          </div>

          <div className="divider">
            <hr />
          </div>

          <div className="product-color">
            <div className="section-header">
              <h1>color</h1>
              <div className="flex gap-2">
                {productData?.color.map((item) => (
                  <span
                    key={item}
                    className={`w-20 h-20 rounded-full border `}
                    style={{ backgroundColor: item }}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="product-size">
            <div className="flex justify-between">
              <h1>size</h1>
              <span>Size Guide</span>
            </div>
            <div className="flex gap-2">
              {productData?.size.map((item) => (
                <div className="quantity-box">
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="product-quantity">
            <h1>quantity</h1>

            <div className="quantity-box flex gap-5">
              <h1>-</h1>
              <h1>1</h1>
              <h1>+</h1>
            </div>

            <span>In stock · Ships today</span>
          </div>

          <div className="product-actions">
            <div className="cart-btn">
              <button>Add to Cart</button>
            </div>

            <div className="buy-btn">
              <a href={`/checkOut/${productData?.id}`}>
                <button>Buy Now</button>
              </a>
            </div>
          </div>

          <div className="product-benefits">
            <span>Free Delivery</span>
            <span>Authentication</span>
            <span>Free Return</span>
          </div>

          <div className="delivery-info">
            <h1>Delivery & Returns</h1>

            <p>
              Standard delivery in 3–5 business days. Express available. Free
              returns within 30 days of delivery. Items must be unworn with
              original tags.
            </p>
          </div>

          <div className="accordion">dropDwon</div>
        </div>
      </div>

      <section className="p-[40px]">
        <div>
          <div>
            <h1>Customer Reviews</h1>
            <div className="flex items-center gap-5">
              {" "}
              <div className="flex gap-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400"
                    fill={
                      star <= Math.round(productData?.rating?.rate)
                        ? "gold"
                        : "none"
                    }
                  />
                ))}
              </div>
              <div>
                <h1>
                  {productData?.rating?.rate}
                  {" Out Of 5 "}
                  {`(${productData?.rating.count} reviews)`}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex ">
            {productData?.reviews?.map((item) => (
              <div className="border p-5">
                <div className="flex gap-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="text-yellow-400"
                      fill={
                        star <=
                        Math.round(
                          productData?.reviews?.map((item) => item?.rating),
                        )
                          ? "gold"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <div>
                  <h1>{item.comment}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
