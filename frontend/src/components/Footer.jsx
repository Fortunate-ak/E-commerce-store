import React from "react";
function Footer(){
  return (
    <div className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} ElectShop — Simple E-commerce Demo</div>
        <div>Contact • Terms • Privacy</div>
      </div>
    </div>
  );
}
export default Footer;
