import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Product from "./product";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products"); // api that we will take our product data from
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

function Products() {
  const [products, setProducts] = useState([]);
  const [showAll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  const productsToDisplay = showAll ? products : products.slice(0, 8);

  return (
    <>
      <section className="products my-5">
        <div className="container">
          <div className="product-head d-flex justify-content-between">
            <Link
              to="/AllProducts"
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
              عباباتنا المميزة
            </h2>
          </div>
          <div className="row">
            {productsToDisplay.map((product) => (
              <div className="col-md-3" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
