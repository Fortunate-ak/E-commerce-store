import React from "react";
import API from "../api";

function ProductCard({product}){
  const handleBuy = () => {
    // show mock confirmation and call /purchase to demonstrate backend call
    API.post("/purchase", { productId: product.id, quantity:1, buyerName: "Student Demo" })
      .then(res => alert(res.data.message))
      .catch(err => alert("Error confirming order (mock)"));
  };

  return (
    <div className="card">
      <img src={product.image_url || "https://via.placeholder.com/300x300?text=Product"} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <button onClick={handleBuy}>Buy Now</button>
    </div>
  );
}

export default ProductCard;
