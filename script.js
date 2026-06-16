// ===== SLIDER =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
  showSlide(index);
  resetAutoSlide();
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn) nextBtn.addEventListener('click', function() {
  nextSlide();
  resetAutoSlide();
});

if (prevBtn) prevBtn.addEventListener('click', function() {
  prevSlide();
  resetAutoSlide();
});

autoSlide = setInterval(nextSlide, 5000);


// ===== Myform =====
let myForm = document.getElementById("visaForm")
let responseMessage =  document.getElementById("formResponse")
myForm.addEventListener("submit", function(event) 
                        { event.preventDefault();

let nameValue = document.getElementById("fullName").value;
  let phoneValue = document.getElementById("phoneNumber").value;
   if (nameValue === "" || phoneValue === ""){
      responseMessage.style.color = "red";
responseMessage.innerText = "Bhai, saari details bharna zaroori hai! ❌";
   }
  else {
    responseMessage.style.color = "green";
    responseMessage.innerText = `Thank you ${nameValue}! Your enquiry has been submitted. Our team will call on ${phoneValue}. 🎉`;
     myForm.reset();
  }
});

