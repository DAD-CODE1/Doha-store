import React from "react";
import banner3 from "../images/banner3.png";
import { Link } from "react-router-dom";

function Banner3() {
  const responsiveStyle = `
  .banner3 {
    background: linear-gradient(93.26deg, #E95CAA 0.13%, #F26262 79.98%, #FF6A00 100%);
    overflow: hidden; 
    position: relative; 
  }

  .banner3-content {
    text-align: right;
    direction: rtl;
  }

  .banner3-content h3.text-orange {
    color: #FFF600;
    font-weight: 700;
    font-size: 36px;
  }

  .banner3-content h3.text-gray {
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
  }

  .btn-backet-white {
    background: white;
    color: black;
    border: none;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-backet-white:hover {
    background: #f2f2f2;
    color: black;
  }

  /* التصميم المتجاوب */
  @media (max-width: 768px) {
    .banner3 {
      padding: 40px 20px; 
    }

    .banner3-content {
      text-align: center;
      margin-top: 20px;
    }

    .banner3-content h3.text-orange {
      font-size: 28px; 
    }

    .banner3-content h3.text-gray {
      font-size: 20px; 
    }

    .banner3 img {
      width: 100%; 
      max-width: 300px; 
    }

    .btn-backet-white {
      font-size: 18px;
      width: 50%; 
    }
  }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section className="banner3 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <img src={banner3} alt="Banner" className="w-75" />
            </div>
            <div className="col-md-6 banner3-content my-5">
              <h3 className="text-orange my-3">
                تشكيلة حصرية من العبايات الفاخرة التي تجمع بين الأصالة والحداثة،
              </h3>
              <h3 className="text-gray my-5">تألقي بأروع التصاميم الخليجية</h3>
              <Link
                to="/AllProducts"
                className="btn btn-backet-white w-25 my-1 text-dark fw-bold"
              >
                تسوق الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner3;
