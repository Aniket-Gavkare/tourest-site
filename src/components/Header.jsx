import React, { useState } from "react";
import "../assets/css/style.css"; // Import your CSS

export default function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={`header ${navActive ? "active" : ""}`} data-header>
      <div className="container">
        <a href="#">
          <h1 className="logo">Tourest</h1>
        </a>
        <button
          className="nav-toggle-btn"
          data-nav-toggle-btn
          aria-label="Toggle Menu"
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" className="open"></ion-icon>
          <ion-icon name="close-outline" className="close"></ion-icon>
        </button>
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <ul className="navbar-list">
            {[
              "Home",
              "About Us",
              "Tours",
              "Destinations",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="navbar-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-secondary">
            Booking Now
          </a>
        </nav>
      </div>
    </header>
  );
}
