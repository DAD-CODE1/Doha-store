import React, { useContext } from "react";
import { AppContext } from "../App";
import ButtonAddBacket from "./Button-add-backet";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Favouritelist() {
  const { favorites, addToCart } = useContext(AppContext);

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
          المفضلة
        </h1>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center my-3 p-3 rounded"
              style={{
                border: "solid 1px #E95CAA",
                backgroundColor: "rgba(248, 249, 250, 0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <img
                className="rounded"
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <h5 className="mx-2" style={{ fontSize: "15px" }}>
                {item.title}
              </h5>
              <p className="mx-2" style={{ fontSize: "15px" }}>
                {item.price} ج.م
              </p>
              {/* إضافة زر أضف للسلة */}
              <div style={{ width: "150px" }}>
                <ButtonAddBacket product={item} addToCart={addToCart} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">
            لم تضف أي شيء إلى المفضلة بعد 😞{" "}
          </p>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Favouritelist;
