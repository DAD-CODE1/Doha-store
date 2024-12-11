import React, { useContext, useState, useEffect } from "react";
import Offer from "./Offer";
import { AppContext } from "../App";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AllOffers() {
  const { addToCart } = useContext(AppContext);
  const [offers, setOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const offersPerPage = 4;

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // api that we will take our product data from
        const data = await response.json();
        setOffers(data);
        setTotalPages(Math.ceil(data.length / offersPerPage));
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
      setLoading(false);
    };

    fetchOffers();
  }, []);

  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = offers.slice(indexOfFirstOffer, indexOfLastOffer);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="nav py-5">
        <Navbar />
      </div>
      <div className="container my-5">
        <h1
          className="text-center my-4"
          style={{ color: "orangered", fontWeight: "700" }}
        >
          جميع العروض
        </h1>
        <div className="row">
          {loading ? (
            <p className="text-center text-white">جاري تحميل العروض...⏳</p>
          ) : currentOffers.length > 0 ? (
            currentOffers.map((offer) => (
              <div className="col-md-6 my-3" key={offer.id}>
                <Offer product={offer} addToCart={addToCart} />
              </div>
            ))
          ) : (
            <p className="text-center text-white">لا توجد عروض حالياً.</p>
          )}
        </div>

        <div className="pagination-container text-center">
          <ul className="pagination">
            <li
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <span className="page-link">السابق</span>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                key={index}
                onClick={() => handlePageChange(index + 1)}
              >
                <span className="page-link">{index + 1}</span>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span className="page-link">التالي</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AllOffers;
