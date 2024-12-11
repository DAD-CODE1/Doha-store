import React, { useContext } from "react";
import { AppContext } from "../App";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ButtonAddBacket from "./Button-add-backet";

function Product({ product }) {
  const { addToCart, toggleFavorite, favorites } = useContext(AppContext);

  const isFavorited = favorites.some((item) => item.id === product.id);

  return (
    <div>
      <div
        className="card rounded p-0 shadow my-5"
        style={{
          backgroundColor: "#868686",
          minHeight: "450px",
          maxHeight: "500px",
        }}
      >
        <img
          src={product.image}
          className="card-img-top rounded"
          alt={product.name}
          style={{ height: "250px" }}
        />
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="card-body-main">
            <div className="d-flex justify-content-between">
              <button
                className="border-0 bg-transparent"
                onClick={() => toggleFavorite(product)}
              >
                {isFavorited ? (
                  <FaHeart style={{ fontSize: "25px", color: "red" }} />
                ) : (
                  <FaRegHeart style={{ fontSize: "25px", color: "black" }} />
                )}
              </button>
              <p
                className="text-end"
                style={{
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                {product.title.split(" ").slice(0, 3).join(" ")}...
              </p>
            </div>
            <p className="text-end" style={{ fontWeight: 700 }}>
              {product.price} ج.م
            </p>
          </div>
        </div>

        <ButtonAddBacket product={product} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default Product;
