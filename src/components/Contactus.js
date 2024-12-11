import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

function Contactus() {
  return (
    <>
    <div className="nav py-5">
        <Navbar />
      </div>
      <div className="">
        <div className="container">
          <h1
            className="text-center my-5 py-5"
            style={{ color: "orangered", fontWeight: 700 }}
          >
            تواصل معنا 
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-4 my-3">
              <div
                className="d-flex align-items-center justify-content-between p-3"
                style={{
                  background: "rgba(255, 192, 203, 0.2)",
                  border: "1px solid #E95CAA",
                  borderRadius: "10px",
                  direction: "rtl",
                }}
              >
                <div className="text">
                  <h5 className="my-3" style={{ color: "white" }}>
                    البريد الالكتروني{" "}
                  </h5>
                  <p
                    className="my-2"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    {" "}
                    gymi7e@gmail.com{" "}
                  </p>
                </div>

                <div
                  className="icon"
                  style={{
                    background: "pink",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    marginRight: "auto",
                    fontSize: "20px",
                  }}
                >
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div
                className="d-flex align-items-center justify-content-between p-3"
                style={{
                  background: "rgba(255, 192, 203, 0.2)",
                  border: "1px solid #E95CAA",
                  borderRadius: "10px",
                  direction: "rtl",
                }}
              >
                <div className="text">
                  <h5 className="my-3" style={{ color: "white" }}>
                    الخط الساخن{" "}
                  </h5>
                  <p
                    className="my-2"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    {" "}
                    01009830457
                  </p>
                </div>

                <div
                  className="icon"
                  style={{
                    background: "pink",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    marginRight: "auto",
                    fontSize: "20px",
                  }}
                >
                  <FaPhoneAlt />
                </div>
              </div>
            </div>

            <div className="col-md-4 my-3">
              <div
                className="d-flex align-items-center justify-content-between p-3"
                style={{
                  background: "rgba(255, 192, 203, 0.2)",
                  border: "1px solid #E95CAA",
                  borderRadius: "10px",
                  direction: "rtl",
                }}
              >
                <div className="text">
                  <h5 className="my-3" style={{ color: "white" }}>
                    {" "}
                    العنوان{" "}
                  </h5>
                  <p
                    className="my-2"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    {" "}
                    شارع احمد ماهر المنصوره مصر{" "}
                  </p>
                </div>

                <div
                  className="icon"
                  style={{
                    background: "pink",
                    color: "white",
                    padding: "10px",
                    borderRadius: "50%",
                    marginRight: "auto",
                    fontSize: "20px",
                  }}
                >
                  <FaHome />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-lg-6">
              <div className="h-100" style={{ minHeight: "400px" }}>
                <iframe
                  title="Google Maps Location"
                  className="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.3878327807713!2d29.982303!3d31.261213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4c482c57e79%3A0x9f7d87b9a95e0e71!2s31%C2%B015'40.4%22N%2029%C2%B059'05.6%22E!5e0!3m2!1sen!2seg!4v1696259412513!5m2!1sen!2seg"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="p-5 text-end"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "15px",
                  border: "1px solid #E95CAA",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <p
                  className="d-inline-block border rounded-pill py-1 px-4"
                  style={{ color: "black" }}
                >
                  تواصل معنا
                </p>
                <h1 className="mb-4 text-dark">
                  هل لديك استفسار؟ لا تتردد في الاتصال بنا!
                </h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control text-end"
                          id="name"
                          placeholder="اسمك"
                          style={{
                            direction: "rtl",
                            background: "rgba(255, 255, 255, 0.3)",
                            border: "1px solid #E95CAA",
                            color: "#333",
                          }}
                        />
                        <label htmlFor="name" className="text-end">
                          اسمك
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control text-end"
                          id="email"
                          placeholder="بريدك الإلكتروني"
                          style={{
                            direction: "rtl",
                            background: "rgba(255, 255, 255, 0.3)",
                            border: "1px solid #E95CAA",
                            color: "#333",
                          }}
                        />
                        <label htmlFor="email" className="text-end">
                          بريدك الإلكتروني
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control text-end"
                          id="subject"
                          placeholder="الموضوع"
                          style={{
                            direction: "rtl",
                            background: "rgba(255, 255, 255, 0.3)",
                            border: "1px solid #E95CAA",
                            color: "#333",
                          }}
                        />
                        <label htmlFor="subject" className="text-end">
                          الموضوع
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control text-end"
                          placeholder="اترك رسالة هنا"
                          id="message"
                          style={{
                            height: "100px",
                            direction: "rtl",
                            background: "rgba(255, 255, 255, 0.3)",
                            border: "1px solid #E95CAA",
                            color: "#333",
                          }}
                        ></textarea>
                        <label htmlFor="message" className="text-end">
                          الرسالة
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-main text-light w-100 py-3 fw-bold"
                        type="submit"
                      >
                        إرسال الرسالة
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
