import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="">
      <div className="footer">
        <div className="f-1">
          <h5>Luxe</h5>
          <p>Premium products crafted for the</p>
          <p>modern lifestyle. Quality and design in</p>
          <p>perfect harmony.</p>
        </div>
        <div className="f-2">
          <h5>Shop</h5>
          <a href="">All Products</a>
          <a href="">Electronics</a>
          <a href="">Electronics</a>
          <a href="">Electronics</a>
        </div>
        <div className="f-3">
          <h5>Support</h5>
          <a href="">Contact Us</a>
          <a href="">Contact Us</a>
          <a href="">Contact Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="f-4">
          <h5>Company</h5>
          <a href="">About Us</a>
          <a href="">About Us</a>
          <a href="">About Us</a>
          <a href="">About Us</a>
        </div>
      </div>

      <div className="f-5">
        <h5>© 2024 Luxe. All rights reserved.</h5>
      </div>
    </footer>
  );
}
