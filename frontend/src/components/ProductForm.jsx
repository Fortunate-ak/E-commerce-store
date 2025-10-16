import React, {useState, useEffect} from "react";
import API from "../api";

function ProductForm({editItem, onSaved}){
  const [form, setForm] = useState({name:"", description:"", price:"", image_url:"", category:"General", featured:false});

  useEffect(()=> {
    if(editItem) setForm({...editItem, featured: !!editItem.featured});
  }, [editItem]);

  const handleChange = e => {
    const {name, value, type, checked} = e.target;
    setForm(prev => ({...prev, [name]: type === "checkbox" ? checked : value}));
  };

  const submit = e => {
    e.preventDefault();
    if(editItem){
      API.put(`/products/${editItem.id}`, form).then(()=>{ onSaved(); setForm({name:"", description:"", price:"", image_url:"", category:"General", featured:false}); }).catch(console.error);
    } else {
      API.post("/products", form).then(()=>{ onSaved(); setForm({name:"", description:"", price:"", image_url:"", category:"General", featured:false}); }).catch(console.error);
    }
  };

  return (
    <form onSubmit={submit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required/>
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required/>
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required/>
      <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="Image URL"/>
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category"/>
      <label style={{display:"block", marginTop:6}}>
        <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange}/> Featured
      </label>
      <button type="submit" style={{marginTop:8}}>{editItem ? "Update" : "Add Product"}</button>
    </form>
  );
}

export default ProductForm;
