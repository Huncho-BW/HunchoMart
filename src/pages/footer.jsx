import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <h2>HunchoMart</h2>
            <p>
              Premium fashion & lifestyle marketplace built for modern shoppers.
              Discover fashion, sneakers, tech, beauty and more.
            </p>
          </div>

          <div class="newsletter">
            <h3>Stay Updated</h3>
            <p>Get exclusive offers and new arrivals.</p>

            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Shop</h4>

            <a href="#">Fashion</a>
            <a href="#">Sneakers</a>
            <a href="#">Accessories</a>
            <a href="#">Watches</a>
          </div>

          <div class="link-group">
            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div class="link-group">
            <h4>Support</h4>

            <a href="#">Help Center</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>

          <div class="link-group">
            <h4>Legal</h4>

            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Security</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {year} HUNCHO MART. All rights reserved.</p>

          <div class="socials">
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href="#">TikTok</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
