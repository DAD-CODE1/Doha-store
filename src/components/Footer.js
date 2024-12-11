import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Frame from "../images/Frame 49.png";

function Footer() {
  return (
    <footer className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center my-3">
            <h3
              style={{ fontSize: "34px", fontWeight: "700", color: "#FF6A00" }}
              className="my-5"
            >
              تابع دوحا ستور
            </h3>
            <div className="d-flex justify-content-center my-3">
              <Link className="footer-icon mx-3" to="https://www.facebook.com">
                <FaFacebook size={24} />
              </Link>
              <Link className="footer-icon mx-3" to="https://www.twitter.com">
                <FaTwitter size={24} />
              </Link>
              <Link className="footer-icon mx-3" to="https://www.instagram.com">
                <FaInstagram size={24} />
              </Link>
              <Link className="footer-icon mx-3" to="https://www.tiktok.com">
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>

          <div className="col-md-3 text-center my-3">
            <h3
              style={{ fontSize: "34px", fontWeight: "700", color: "#FF6A00" }}
              className="my-5"
            >
              خدمة العملاء
            </h3>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* الاتصال بالرقم الأول */}
                <div className="d-flex align-items-center">
                  <Link
                    className="text-white mx-3"
                    style={{ fontSize: "16px" }}
                    to="tel:+966509659988"
                  >
                    +966509659988
                  </Link>
                  <FaPhone className="phone-icon" />
                </div>
                {/* المحادثة عبر واتساب */}
                <div className="d-flex align-items-center my-3">
                  <Link
                    className="text-white mx-3"
                    style={{ fontSize: "16px" }}
                    to="https://wa.me/966509659988"
                  >
                    +966509659988
                  </Link>
                  <FaWhatsapp className="phone-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-center my-3">
            <h3
              style={{ fontSize: "34px", fontWeight: "700", color: "#FF6A00" }}
              className="my-5"
            >
              روابط تهمك
            </h3>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <Link
                  to="/about"
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  من نحن
                </Link>
                <Link
                  to="/returns"
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  الاستبدال والإسترجاع
                </Link>
                <Link
                  to="/privacy-policy"
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  سياسة الخصوصية
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-center my-5">
            <img src={Frame} className="w-100" alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
