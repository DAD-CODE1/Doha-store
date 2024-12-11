import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import VectorImage from "../images/Vector (1).png";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <>
      <header style={{ paddingBottom: "150px", paddingTop: "50px" }}>
        {/* Navbar */}
        <Navbar />
        <div className="container my-5 py-5">
          {/* Header Content */}
          <div className="header-info text-center mt-5 pt-5">
            <img src={VectorImage} alt="Vector Icon" />
            <h1
              style={{ fontSize: "54px", fontWeight: "700" }}
              className="my-5"
            >
              أناقة خليجية بمعايير عصرية
            </h1>
            <p style={{ fontSize: "24px", fontWeight: "700" }} className="mb-5">
              نمنحكِ إطلالة تجمع بين الفخامة والراحة. سواء كنتِ تبحثين عن تصميم
              يناسب مناسباتكِ الخاصة أو إطلالة يومية مميزة، نحن هنا لتلبية جميع
              احتياجاتكِ بأحدث الصيحات
            </p>
            <Link to="/AllProducts" className="btn-main text-decoration-none">
              تسوق الأن
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
