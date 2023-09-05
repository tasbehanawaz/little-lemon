import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="navlist">
        <img src="little-lemon\src\Screenshot (400).png" alt="Little Lemon logo" />
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order online</a></li>
            <li><a href="/login">Log in</a></li>
          </ul>
        </nav>
      </div>

      <div className="contact">
        <ul className="contact-info">
          <li>California, USA</li>
          <li>+1 (903) 640-5671</li>
          <li>littlelemon@gmail.com</li>
        </ul>
      </div>

      <div className="socials">
        <ul className="social-links">
          <li><a href="https://www.instagram.com/littlelemon/">Instagram</a></li>
          <li><a href="https://www.facebook.com/littlelemon/">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
