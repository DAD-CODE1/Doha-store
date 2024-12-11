import React from "react";
import { Link } from "react-router-dom";
import view1 from "../images/viwe1.jpg"; // الصورة الأولى
import view2 from "../images/viwe2.png"; // الصورة الثانية

function Viwe() {
  return (
    <div>
      <section className="viwe my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="carda my-5">
                <img
                  src={view2}
                  style={{ width: "100%", height: "275px" }}
                  className="rounded"
                  alt="عرض ثاني"
                />
                <div className="content-viwe">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="/AllProducts"
                        className="btn-main-sm text-decoration-none"
                      >
                        تسوق الأن
                      </Link>
                    </div>
                    <div className="col-6">
                      <p>تألقي بإطلالة مميزة لكل مناسبة</p>
                      <p>تمتعي بالأناقة و الراحة مع عباياتنا الفاخرة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carda my-5">
                <img
                  src={view1}
                  style={{ width: "100%", height: "275px" }}
                  className="rounded"
                  alt="عرض أول"
                />
                <div className="content-viwe">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="/AllProducts"
                        className="btn-main-sm text-decoration-none"
                      >
                        تسوق الأن
                      </Link>
                    </div>
                    <div className="col-6">
                      <p>تألقي بإطلالة مميزة لكل مناسبة</p>
                      <p>تمتعي بالأناقة و الراحة مع عباياتنا الفاخرة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Viwe;
