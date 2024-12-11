import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import FrameLogo from "../images/Frame 3.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll for fixed navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Handle sidebar toggle
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");

    const openSidebar = () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    };

    const closeSidebar = () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    };

    sidebarToggle.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    window.addEventListener("scroll", handleScroll);

    return () => {
      sidebarToggle.removeEventListener("click", openSidebar);
      closeBtn.removeEventListener("click", closeSidebar);
      overlay.removeEventListener("click", closeSidebar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`navbar-fixed ${isScrolled ? "navbar-scroll" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          boxShadow: isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="container">
          <div className="top-bar d-flex justify-content-between align-items-center p-3">
            <div className="left-icon">
              <Link to="/Cartlist" className="text-decoration-none">
                <TbShoppingBagPlus
                  style={{ fontSize: "35px", color: "white" }}
                  className="mx-3"
                />
              </Link>
              <Link to="/Favouritelist">
                <FaRegHeart
                  style={{ fontSize: "35px", color: "white" }}
                  className="mx-3"
                />
              </Link>
            </div>

            <div className="logo text-center">
              <img
                src={FrameLogo}
                alt="Logo"
                style={{
                  marginTop: "10px",
                  filter: isScrolled ? "none" : "brightness(0) invert(1)",
                }}
              />
            </div>

            <div className="right-icon d-flex align-items-center gap-2">
              <p
                className="mb-0"
                style={{
                  fontSize: "16px",
                  color: "white",
                }}
              >
                القائمة
              </p>
              <Link to="#" className="sidebar-toggle">
                <FaBars
                  style={{ fontSize: "30px", color: "white" }}
                  className="mx-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar-container" id="sidebar">
        <span className="close-btn" id="close-btn">
          &times;
        </span>
        <ul>
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="/Cartlist">السله</Link>
          </li>
          <li>
            <Link to="/Favouritelist">المفضلة</Link>
          </li>
          <li>
            <Link to="/Aboutus">عن الموقع</Link>
          </li>
          <li>
            <Link to="/Contactus"> تواصل معنا </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      <div className="overlay" id="overlay"></div>
    </>
  );
};

export default Navbar;
