import React, {useEffect, useState} from "react";
import API from "../api";

function DealOfDay(){
  const [deal, setDeal] = useState(null);
  useEffect(()=> {
    // pick the first featured as deal of day
    API.get("/products?featured=1").then(r=>setDeal(r.data[0] || null)).catch(e=>console.log(e));
  }, []);
  if(!deal) return null;
  return (
    <div className="container">
      <div className="deal">
        <div>
          <h3>Deal of the Day</h3>
          <h2>{deal.name}</h2>
          <p style={{color:"#555"}}>{deal.description}</p>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:20, fontWeight:700}}>${deal.price}</div>
          <button onClick={()=> alert(`Order confirmed for ${deal.name} (mock).`)} style={{marginTop:12}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DealOfDay;
