import React from "react";

const categories = ["Laptops","Audio","Smartphones","Wearables","Accessories","Printers","Gaming"];

function CategoriesStrip(){
  return (
    <div className="container">
      <div className="categories">
        {categories.map(cat => (
          <div className="category-item" key={cat}>
            <div style={{fontWeight:600}}>{cat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesStrip;
