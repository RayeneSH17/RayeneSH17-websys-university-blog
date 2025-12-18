// js/validation.js

export function validateContactForm(form) {
  let valid = true;

  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');

  // Clear previous errors
  form.querySelectorAll('.error').forEach(e => e.remove());

  function showError(input, text) {
    const p = document.createElement('p');
    p.classList.add('error');
    p.style.color = 'red';
    p.textContent = text;
    input.insertAdjacentElement('afterend', p);
    valid = false;
  }

  if (name && name.value.trim().length < 3) {
    showError(name, 'Name must be at least 3 characters.');
  }

  if (email && !email.value.includes('@')) {
    showError(email, 'Please enter a valid email address.');
  }

  if (message && message.value.trim().length < 10) {
    showError(message, 'Message must be at least 10 characters.');
  }

  return valid;
}
