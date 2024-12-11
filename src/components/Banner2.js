import React from "react";
import group8 from "../images/Group 18.png";
import { Link } from "react-router-dom";

function Banner2() {
  const responsiveStyle = `
    .banner2-content {
      text-align: right;
      direction: rtl;
    }
    .banner2-content h3 {
      font-size: 26px;
      font-weight: 700;
    }
    .banner2-content .text-primar {
      color: #E95CAA;
    }
    .banner2-content .text-orange {
      color: #FF6A00;
    }
    .banner2-content .text-gray {
      font-size: 37px;
      font-weight: 600;
      color: #D8D8D8;
    }
   
      .btn-backet {
  background: linear-gradient(180deg, #E95CAA 0%, #FF6A00 100%);
  color: #fff;
  border: none;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-backet:hover {
  background: linear-gradient(180deg, #FF6A00 0%, #E95CAA 100%);

}
   @media (max-width: 768px) {
      .banner2-content {
        text-align: center; 
      }
           .btn-backet {
      font-size: 18px; 
      width: 50%; 
    }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section className="banner2 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 d-flex justify-content-center">
              <img src={group8} alt="" className="w-75  " />
            </div>
            <div className="col-md-6 banner2-content my-5">
              <h3 className="text-primar my-3">
                اكتشفي تشكيلتنا اليومية التي تمنحكِ الراحة والأناقة معًا,
              </h3>
              <h3 className="text-orange my-3">
                مصنوعة من أجود الأقمشة لتناسب أسلوب حياتك العصري
              </h3>
              <h3 className="text-gray my-5">عبايات مصممة لأناقتك كل يوم...</h3>
              <Link
                to="/AllProducts"
                className="btn btn-backet w-25 my-1 text-dark fw-bold"
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

export default Banner2;
