import React from "react";

function ButtonAddBacket({ product, addToCart }) {
  return (
    <div>
      <button
        className="w-100 btn-backet rounded py-2"
        onClick={() => addToCart(product)}
      >
        أضف للسلة
      </button>
    </div>
  );
}

export default ButtonAddBacket;
