import React, {useEffect, useState} from "react";
import API from "../api";
import ProductForm from "./ProductForm";

function AdminDashboard(){
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = () => API.get("/products").then(r=>setProducts(r.data)).catch(console.error);
  useEffect(()=> load(), []);

  const remove = (id) => {
    if(!window.confirm("Delete product?")) return;
    API.delete(`/products/${id}`).then(()=> load()).catch(console.error);
  };

  return (
    <div className="admin">
      <h2>Admin Dashboard</h2>
      <div style={{display:"flex", gap:20}}>
        <div style={{flex:1}}>
          <ProductForm editItem={editing} onSaved={()=>{ setEditing(null); load(); }} />
        </div>
        <div style={{flex:1}}>
          <h3>Products</h3>
          <ul className="list">
            {products.map(p=>(
              <li key={p.id}>
                <div>
                  <strong>{p.name}</strong> <div style={{color:"#777"}}>${p.price}</div>
                </div>
                <div>
                  <button onClick={()=>setEditing(p)}>Edit</button>
                  <button onClick={()=>remove(p.id)} style={{marginLeft:8}}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
