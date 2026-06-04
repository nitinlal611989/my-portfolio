
// ===== DARK/LIGHT MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// ===== SMOOTH SCROLLING =====
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
