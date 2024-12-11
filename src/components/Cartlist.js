import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import Footer from "./Footer";

function Cartlist() {
  const { cart, removeFromCart } = useContext(AppContext);
  const [counts, setCounts] = useState({});

  const increaseQuantity = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1),
    }));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const quantity = counts[item.id] || 1;
        return total + item.price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "هل أنت متأكد أنك تريد حذف هذا المنتج ؟",
      text: "تاكد من ذلك دا منتج فاجر 🤡",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "نعم، حذف!",
      cancelButtonText: "إلغاء",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        Swal.fire("تم الحذف!", "تم حذف المنتج من السلة.", "success");
      }
    });
  };

  return (
    <>
      <div className="nav py-5">
        <Navbar />
      </div>
      <div className="container my-5 py-5">
        <h1
          className="text-center my-4"
          style={{ color: "orangered", fontWeight: "700" }}
        >
          سلة المشتريات
        </h1>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-3 p-3 rounded"
                style={{
                  border: "solid 1px #E95CAA",
                  backgroundColor: "rgba(248, 249, 250, 0.5)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <img
                  className="rounded mx-2"
                  src={item.image}
                  alt={item.title}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h5 className="mx-2" style={{ fontSize: "15px" }}>
                  {item.title.split(" ").slice(0, 3).join(" ")}...
                </h5>
                <div className="d-flex align-items-center mx-2">
                  <button
                    className="btn btn-secondary btn-sm mx-1 "
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{counts[item.id] || 1}</span>
                  <button
                    className="btn btn-secondary btn-sm mx-1 "
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="mx-2" style={{ fontSize: "13px" }}>
                  {(item.price * (counts[item.id] || 1)).toFixed(2)} ج.م
                </p>
                <button
                  className="btn btn-main mx-2 shadow fw-bold"
                  onClick={() => handleRemove(item.id)}
                >
                  حذف
                </button>
              </div>
            ))}

            <div className="text-center mt-4">
              <h4 style={{ color: "#E95CAA", fontWeight: "700" }}>
                الإجمالي: {calculateTotal()} ج.م
              </h4>
              <button
                className="btn btn-main mt-3 px-4 py-2"
                style={{ fontSize: "16px", fontWeight: "700" }}
                onClick={() =>
                  alert(
                    `تم إتمام الشراء بنجاح! الإجمالي: ${calculateTotal()} ج.م`
                  )
                }
              >
                اشتري الان
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-white">
            🛒 لم تضف أي منتج إلى السلة بعد
          </p>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Cartlist;
