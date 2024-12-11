import React from "react";
import catimg1 from "../images/Group 2 (1).png";

function Cardcategory() {
  return (
    <div>
      <div className="card-caregory text-center mx-2 my-5">
        <img src={catimg1} className="w-100" alt="..." />
        <p className="category-text">عبايات رسمية</p>
      </div>
    </div>
  );
}

export default Cardcategory;
