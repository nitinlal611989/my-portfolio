// ===== HEADER INJECT =====
const headerHTML = `
  <header>
    <div class="logo">Nitin Dev</div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="seo.html">SEO</a>
      <a href="smo.html">SMO</a>
      <a href="ppc.html">PPC</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
`;

// Header inject karo
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// Active link highlight karo
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
