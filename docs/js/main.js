// js/main.js

import { fetchPosts } from './api.js';
import { showLoading, hideLoading, showError, clearError, renderPosts } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  clearError();
  showLoading();

  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.error(error);
    showError('Could not load posts. Please try again later.');
  } finally {
    hideLoading();
  }

  // Bootstrap form validation
  const form = document.querySelector('#contactForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // If form is invalid → show Bootstrap validation
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // If form is valid → show success message
      form.classList.add('was-validated');

      const successMessage = document.createElement('p');
      successMessage.textContent = 'Message sent successfully!';
      successMessage.classList.add('alert', 'alert-success', 'mt-3');

      form.after(successMessage);
      form.reset();
    });
  }
});
