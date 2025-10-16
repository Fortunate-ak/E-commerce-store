import React from "react";

function Header(){
  return (
    <div className="header">
      <div className="container">
        <div className="logo">ElectShop</div>
        <div className="search">
          <input placeholder="Search products, brands..." />
        </div>
        <div className="nav-actions">
          <div>Login</div>
          <div>Cart (0)</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
