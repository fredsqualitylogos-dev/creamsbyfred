// ==============================
// Mobile navigation menu
// ==============================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// ==============================
// User-controlled dessert deal pop-up
// ==============================
const dealButton = document.getElementById('deal-button');
const dealModal = document.getElementById('deal-modal');
const closeModal = document.getElementById('close-modal');

dealButton.addEventListener('click', () => {
  dealModal.hidden = false;
  closeModal.focus();
});

closeModal.addEventListener('click', () => {
  dealModal.hidden = true;
  dealButton.focus();
});

dealModal.addEventListener('click', (event) => {
  if (event.target === dealModal) {
    dealModal.hidden = true;
  }
});

// ==============================
// Dynamic price calculator
// ==============================
const dessertCount = document.getElementById('dessert-count');
const calculateButton = document.getElementById('calculate-button');
const totalOutput = document.getElementById('total-output');

calculateButton.addEventListener('click', () => {
  const count = Number(dessertCount.value);
  const price = 8.95;

  if (count < 1 || count > 20 || Number.isNaN(count)) {
    totalOutput.textContent = 'Please enter a number between 1 and 20.';
    return;
  }

  const total = count * price;
  totalOutput.textContent = `Estimated total: £${total.toFixed(2)}`;
});

// ==============================
// Contact form confirmation
// ==============================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thank you. Your enquiry has been received.';
  contactForm.reset();
});
