import { attachFormValidation } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
  attachFormValidation();
});
import { getPosts } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const postId = parseInt(params.get('id'));

  const posts = await getPosts();
  const post = posts[postId - 1]; // assuming post IDs start at 1

  const main = document.querySelector('main');
  if (post) {
    main.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
  } else {
    main.innerHTML = `<p>Post not found.</p>`;
  }
});
