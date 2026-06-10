const footerHTML = `
  <footer class="main-footer">

    <!-- ===== ROW 1: REACH OUT + FORM + FIND US ===== -->
    <div class="footer-row-1">
      <div class="footer-reach">
        <h2>REACH<br>OUT</h2>
      </div>

      <div class="footer-form-wrap">
        <h3>Free Consultation Lo</h3>
        <form id="footerForm">
          <input type="text" placeholder="Tumhara Naam*">
          <input type="email" placeholder="Email*">
          <div class="phone-group">
            <select class="country-code">
              <option>IND (+91)</option>
              <option>USA (+1)</option>
              <option>UK (+44)</option>
            </select>
            <input type="tel" placeholder="Phone Number*">
          </div>
          <select>
            <option value="">Service Select Karo*</option>
            <option value="canada">Canada Immigration</option>
            <option value="australia">Australia Immigration</option>
            <option value="uk">UK Immigration</option>
            <option value="europe">Europe Immigration</option>
          </select>
          <button type="submit">GET FREE CONSULTATION</button>
        </form>
      </div>

      <div class="footer-find-wrap">
        <h3>Find Us</h3>
        <div class="office-card">
          <h4>— DELHI OFFICE</h4>
          <p>📍 Connaught Place,<br>New Delhi, 110001</p>
          <p>📧 nitinlal611989@gmail.com</p>
          <p>📞 +91-XXXXXXXXXX</p>
          <p>🕐 Mon-Sat: 10am - 6pm</p>
          <a href="contact.html" class="schedule-btn">
            SCHEDULE A MEETING
          </a>
        </div>
      </div>
    </div>

    <!-- ===== DIVIDER ===== -->
    <div class="footer-divider"></div>

    <!-- ===== ROW 2: LINKS ===== -->
    <div class="footer-row-2">

      <div class="footer-links-col">
        <h3>Important Links</h3>
        <ul>
          <li><a href="index.html">→ Home</a></li>
          <li><a href="about.html">→ About Us</a></li>
          <li><a href="canada.html">→ Canada Immigration</a></li>
          <li><a href="australia.html">→ Australia Immigration</a></li>
          <li><a href="uk.html">→ UK Immigration</a></li>
          <li><a href="europe.html">→ Europe Immigration</a></li>
          <li><a href="contact.html">→ Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h3>Canada Immigration</h3>
        <ul>
          <li><a href="canada.html">→ Express Entry</a></li>
          <li><a href="canada.html">→ PNP Program</a></li>
          <li><a href="canada.html">→ Family Sponsorship</a></li>
          <li><a href="canada.html">→ Student Visa</a></li>
          <li><a href="canada.html">→ Work Permit</a></li>
          <li><a href="canada.html">→ PR Visa</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h3>Australia Immigration</h3>
        <ul>
          <li><a href="australia.html">→ Skilled Migration</a></li>
          <li><a href="australia.html">→ Student Visa</a></li>
          <li><a href="australia.html">→ Work Visa</a></li>
          <li><a href="australia.html">→ Business Visa</a></li>
          <li><a href="australia.html">→ PR Visa</a></li>
          <li><a href="australia.html">→ Points Calculator</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h3>Other Services</h3>
        <ul>
          <li><a href="uk.html">→ UK Work Visa</a></li>
          <li><a href="uk.html">→ UK Student Visa</a></li>
          <li><a href="europe.html">→ Germany Job Seeker</a></li>
          <li><a href="europe.html">→ Schengen Visa</a></li>
          <li><a href="contact.html">→ Free Assessment</a></li>
          <li><a href="contact.html">→ Book Consultation</a></li>
        </ul>
      </div>

    </div>

    <!-- ===== ROW 3: BOTTOM BAR ===== -->
    <div class="footer-bottom">
      <p>© 2025 Nitin Immigration | All Rights Reserved</p>
      <div class="social-icons">
        <a href="https://github.com/nitinlal611989" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>

  </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
