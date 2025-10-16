import React, {useEffect, useState} from "react";
import API from "../api";
import ProductCard from "./ProductCard";

function ProductGrid(){
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    API.get("/products").then(r=>setProducts(r.data)).catch(e=>console.log(e));
  }, []);
  return (
    <div className="container">
      <h2 style={{marginTop:20}}>Latest Products</h2>
      <div className="products-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default ProductGrid;
