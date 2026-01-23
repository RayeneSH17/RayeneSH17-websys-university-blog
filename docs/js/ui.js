// js/ui.js

const postsContainer = document.getElementById('posts-container');
const loadingIndicator = document.getElementById('loading-indicator');
const errorMessage = document.getElementById('error-message');

export function showLoading() {
  if (loadingIndicator) loadingIndicator.hidden = false;
  if (postsContainer) postsContainer.setAttribute('aria-busy', 'true');
}

export function hideLoading() {
  if (loadingIndicator) loadingIndicator.hidden = true;
  if (postsContainer) postsContainer.setAttribute('aria-busy', 'false');
}

export function showError(message) {
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.hidden = false;
  }
}

export function clearError() {
  if (errorMessage) {
    errorMessage.textContent = '';
    errorMessage.hidden = true;
  }
}

export function renderPosts(posts) {
  if (!postsContainer) return;

  postsContainer.innerHTML = '';

  posts.forEach((post) => {
    const article = document.createElement('article');
    article.classList.add('post');

    // ADDED: Accessibility role for dynamic posts
    article.setAttribute('role', 'listitem');

    const title = document.createElement('h3');
    title.textContent = post.title;

    const meta = document.createElement('p');
    meta.classList.add('post-meta');
    meta.textContent = `${post.author} – ${new Date(post.created_at).toLocaleDateString()}`;

    const body = document.createElement('p');
    body.textContent = post.body;

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Read more';
    link.classList.add('read-more');

    // OPTIONAL but recommended: improves screen reader clarity
    link.setAttribute('aria-label', `Read more about ${post.title}`);

    article.appendChild(title);
    article.appendChild(meta);
    article.appendChild(body);
    article.appendChild(link);

    postsContainer.appendChild(article);
  });
}
