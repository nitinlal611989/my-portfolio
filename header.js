const headerHTML = `
  <header>
    <div class="logo">Nitin Immigration</div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="canada.html">Canada</a>
      <a href="australia.html">Australia</a>
      <a href="uk.html">UK</a>
      <a href="europe.html">Europe</a>
      <a href="contact.html">Contact</a>
    </nav>
    <a href="contact.html" class="btn-primary" 
       style="padding:10px 20px;font-size:14px">
      Free Consultation
    </a>
  </header>
`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);

const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
