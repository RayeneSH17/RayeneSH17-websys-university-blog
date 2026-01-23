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

    // ADDED: make error accessible to screen readers
    p.setAttribute('role', 'alert');

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

export function attachFormValidation() {
  const form = document.getElementById('createPostForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    if (validateCreatePostForm(form)) {
      mockSubmitPost();
    }
  });
}

export function validateCreatePostForm(form) {
  let valid = true;

  const title = form.querySelector('#title');
  const body = form.querySelector('#body');

  if (title.value.trim().length < 5) {
    showError(title, 'Title must be at least 5 characters.');
    valid = false;
  }

  if (body.value.trim().length < 20) {
    showError(body, 'Body must be at least 20 characters.');
    valid = false;
  }

  return valid;
}

function showError(input, message) {
  const span = document.createElement('span');
  span.className = 'error';
  span.style.color = 'red';
  span.textContent = message;

  // ADDED: make error accessible to screen readers
  span.setAttribute('role', 'alert');

  input.insertAdjacentElement('afterend', span);
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(e => e.remove());
}

export function mockSubmitPost() {
  const banner = document.createElement('div');
  banner.textContent = '✅ Post submitted successfully (simulated)';
  banner.style.background = '#d4edda';
  banner.style.color = '#155724';
  banner.style.padding = '1rem';
  banner.style.marginTop = '1rem';
  document.body.appendChild(banner);
}
