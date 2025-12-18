// js/main.js

import { fetchPosts } from './api.js';
import { showLoading, hideLoading, showError, clearError, renderPosts } from './ui.js';
import { validateContactForm } from './validation.js';

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

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateContactForm(form)) {
        alert('Form submitted!');
        form.reset();
      }
    });
  }
});
