import React, { useEffect, useState } from "react";
import Product from "./product";
import Navbar from "./Navbar";
import Footer from "./Footer";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products"); // api that we will take our product data from
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 8;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setTotalPages(Math.ceil(data.length / productsPerPage));
      setLoading(false);
    };

    getProducts();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <div className="nav py-5">
        <Navbar />
      </div>
      <section className="products my-5 py-5">
        <div className="container">
          <h2
            className="text-center"
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "orangered",
            }}
          >
            جميع عبابتنا
          </h2>
          <div className="row">
            {loading ? (
              <p className="text-white my-5 text-center">
                جاري تحميل المنتجات...⏳
              </p>
            ) : currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div className="col-md-3" key={product.id}>
                  <Product product={product} />
                </div>
              ))
            ) : (
              <p className="text-white my-5 text-center">
                لا توجد منتجات حالياً.
              </p>
            )}
          </div>

          <div className="pagination-container text-center ">
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
                className={`page-item  ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <span className="page-link">التالي</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AllProducts;
