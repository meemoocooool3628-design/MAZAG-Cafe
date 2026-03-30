// Order Modal
let selectedProduct = null;
const orderModal = document.getElementById("orderModal");

function openOrder(name, price) {
  selectedProduct = { product: name, price };
  orderModal.style.display = "flex";
}

function closeOrder() {
  orderModal.style.display = "none";
}

document.getElementById("confirmOrder").addEventListener("click", () => {
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const address = document.getElementById("orderAddress").value.trim();

  if (!name || !phone || !address) return alert("املى كل البيانات");

  alert(`✅ تم ارسال الطلب: ${selectedProduct.product} - ${selectedProduct.price} EGP`);
  document.getElementById("orderName").value = "";
  document.getElementById("orderPhone").value = "";
  document.getElementById("orderAddress").value = "";
  closeOrder();
});

// Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal-anim").forEach(el => observer.observe(el));

// Navbar toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Contact form
const contactFeedback = document.getElementById('contactFeedback');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if(!name || !email || !message) {
    contactFeedback.textContent = "❌ املى كل البيانات!";
    contactFeedback.className = "feedback-message feedback-error";
    contactFeedback.style.display = "block";
    return;
  }

  // رسالة نجاح
  contactFeedback.textContent = `✅ شكراً ${name}, رسالتك تم ارسالها!`;
  contactFeedback.className = "feedback-message feedback-success";
  contactFeedback.style.display = "block";

  contactForm.reset();

  setTimeout(() => {
    contactFeedback.style.display = "none";
  }, 4000);
});


