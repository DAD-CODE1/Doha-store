import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ButtonAddBacket from "./Button-add-backet";

function Offer({ product, addToCart }) {
  const rating = product.rating?.rate || 0; // استخدم تقييم المنتج إذا كان موجودًا

  return (
    <div
      className="offer-card rounded p-3 my-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(217, 217, 217, 0.49) 0%, rgba(115, 115, 115, 0.56) 100%)",
        border: "1px solid #E95CAA",
        minHeight: "320px",
        maxHeight: "350px",
      }}
    >
      <div className="row">
        <div className="col-8">
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "white",
              textAlign: "end",
            }}
            className="my-3"
          >
            {product.title.split(" ").slice(0, 3).join(" ")}...
          </h1>
          <div className="d-flex justify-content-between my-4">
            <p
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              تفاصيل المنتج: جودة ممتازة
            </p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              التصنيف: {product.category}
            </p>
          </div>
          <div className="d-flex justify-content-between my-4">
            <div className="d-flex flex-row">
              <p className="custom-badge mx-1">5 أيام</p>
              <p className="custom-badge mx-1">شحن مجاني</p>
            </div>
            <div className="d-block text-end">
              <div className="star-rating-container">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={i < rating ? "text-warning" : "text-muted"}
                    />
                  ))}
                </div>
                <p>{product.price} ج.م</p>
              </div>
            </div>
          </div>
          <ButtonAddBacket product={product} addToCart={addToCart} />
        </div>
        <div className="col-4">
          <img
            src={product.image}
            className="w-100 h-100"
            alt={product.title}
            style={{ maxHeight: "280px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
