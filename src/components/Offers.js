import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Offer from "./Offer";
import { useContext } from "react";
import { AppContext } from "../App";

function Offers() {
  const [offers, setOffers] = useState([]);
  const { addToCart } = useContext(AppContext);

  const apiURL = "https://fakestoreapi.com/products"; //  api that we will take our product data from

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setOffers(data.slice(0, 4));
      })
      .catch((error) => console.error("Error fetching offers:", error));
  }, []);

  return (
    <>
      <section className="products my-5">
        <div className="container">
          <div className="product-head d-flex justify-content-between">
            <Link
              to="/AllOffers"
              style={{
                color: "rgb(240, 69, 7)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mx-2" /> عرض الكل
            </Link>
            <h2
              className="text-center"
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "white",
              }}
            >
              عروض وتخفيضات
            </h2>
          </div>

          <section className="offers mb-5">
            <div className="container">
              <div className="row">
                {offers.length > 0 ? (
                  offers.map((offer) => (
                    <div className="col-md-6" key={offer.id}>
                      <Offer product={offer} addToCart={addToCart} />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-white">
                    لا توجد عروض متاحة حاليًا.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Offers;
