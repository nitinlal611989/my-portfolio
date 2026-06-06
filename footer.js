const footerHTML = `
  <footer class="main-footer">
    <div class="footer-grid">
      <div class="footer-col footer-form">
        <h3>Free Consultation Lo</h3>
        <form id="footerForm">
          <input type="text" placeholder="Tumhara Naam*">
          <input type="email" placeholder="Email*">
          <input type="tel" placeholder="Phone Number*">
          <select>
            <option value="">Service Select Karo*</option>
            <option value="seo">SEO</option>
            <option value="smo">SMO</option>
            <option value="ppc">PPC</option>
            <option value="all">Sab Services</option>
          </select>
          <button type="submit">GET FREE CONSULTATION</button>
        </form>
      </div>
      <div class="footer-col footer-find">
        <h3>Find Us</h3>
        <div class="office-card">
          <h4>- DELHI OFFICE</h4>
          <p>Connaught Place, New Delhi, 110001</p>
          <p>Email: nitinlal611989@gmail.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Hours: Mon-Sat: 10am - 6pm</p>
          <a href="contact.html" class="schedule-btn">CONTACT KARO</a>
        </div>
      </div>
      <div class="footer-col footer-links">
        <h3>Important Links</h3>
        <ul>
          <li><a href="seo.html">→ SEO Services</a></li>
          <li><a href="smo.html">→ SMO Services</a></li>
          <li><a href="ppc.html">→ PPC Services</a></li>
          <li><a href="about.html">→ About Us</a></li>
          <li><a href="contact.html">→ Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col footer-links">
        <h3>Our Services</h3>
        <ul>
          <li><a href="seo.html">→ On-Page SEO</a></li>
          <li><a href="seo.html">→ Off-Page SEO</a></li>
          <li><a href="seo.html">→ Technical SEO</a></li>
          <li><a href="smo.html">→ Facebook Marketing</a></li>
          <li><a href="smo.html">→ Instagram Marketing</a></li>
          <li><a href="ppc.html">→ Google Ads</a></li>
          <li><a href="ppc.html">→ Facebook Ads</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Nitin Dev | All Rights Reserved</p>
      <div class="social-icons">
        <a href="https://github.com/nitinlal611989" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>
  </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
