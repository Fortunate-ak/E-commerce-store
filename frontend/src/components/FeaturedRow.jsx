import React, {useEffect, useState} from "react";
import API from "../api";

function FeaturedRow(){
  const [featured, setFeatured] = useState([]);
  useEffect(()=> {
    API.get("/products?featured=1").then(r=>setFeatured(r.data)).catch(e=>console.log(e));
  }, []);
  return (
    <div className="featured-row container">
      {featured.map(item=>(
        <div className="featured-card" key={item.id}>
          <img src={item.image_url} alt={item.name} />
          <div>
            <strong>{item.name}</strong>
            <div style={{color:"#6b7280"}}>${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedRow;
