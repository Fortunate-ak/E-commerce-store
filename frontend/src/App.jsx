import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FeaturedRow from "./components/FeaturedRow";
import ProductGrid from "./components/ProductGrid";
import CategoriesStrip from "./components/CategoriesStrip";
import DealOfDay from "./components/DealOfDay";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";

function App(){
  return (
    <div>
      <Header />
      <HeroBanner />
      <div className="container">
        <FeaturedRow />
        <DealOfDay />
        <ProductGrid />
        <CategoriesStrip />
      </div>
      <AdminDashboard />
      <Footer />
    </div>
  );
}

export default App;

