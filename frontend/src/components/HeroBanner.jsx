import React from "react";

function HeroBanner(){
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>Boat Rockerz 510 Wireless Headphones</h1>
          <p>Flat 40% Discount — premium BT headphones with long battery</p>
          <button style={{background:"#0ea5a3", color:"#fff", padding:"10px 14px", border:"none", borderRadius:6}}>Shop Now</button>
        </div>
        <img src="https://via.placeholder.com/420x300?text=Headphones+Hero" alt="hero" />
      </div>
    </div>
  );
}

export default HeroBanner;
