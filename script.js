// Smooth scroll
const shopBtn = document.getElementById('shopBtn');
shopBtn.addEventListener('click', () => {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
    alert('Please fill all required fields');
    return;
  }

  alert('Form submitted successfully');
  e.target.reset();
});

// Interactive buttons
document.querySelectorAll('.product button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Added ✓';
    btn.disabled = true;
  });
});
