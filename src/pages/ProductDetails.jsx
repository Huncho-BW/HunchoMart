import React from "react";
import fashion from "../assets/fashion.webp";
import { product } from "../data/product";
import { useParams } from "react-router-dom";
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
          <h1>{productData?.title}</h1>
          <span>like</span>
        </div>

        <div className="product-price">
          <h1>{productData?.price}</h1>
          <h1>actualy price</h1>
          <h1>{productData?.discountPercentage}</h1>
        </div>

        <div className="divider">
          <hr />
        </div>

        <div className="product-color">
          <div className="section-header">
            <h1>color</h1>
            <span></span>
          </div>
        </div>

        <div className="product-size">
          <div className="section-header">
            <h1>size</h1>
            <span>Size Guide</span>
          </div>
        </div>

        <div className="product-quantity">
          <h1>quantity</h1>

          <div className="quantity-box">
            <h1>2</h1>
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
  );
}
