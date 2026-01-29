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

    // Bootstrap grid column
    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');

    // Article wrapper with Bootstrap card
    const article = document.createElement('article');
    article.setAttribute('role', 'listitem');
    article.classList.add('card', 'h-100', 'shadow-sm');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = post.title;

    const meta = document.createElement('p');
    meta.classList.add('post-meta', 'text-muted', 'mb-2');
    meta.textContent = `${post.author} – ${new Date(post.created_at).toLocaleDateString()}`;

    const body = document.createElement('p');
    body.classList.add('card-text');
    body.textContent = post.body;

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Read more';
    link.classList.add('btn', 'btn-primary', 'btn-sm');
    link.setAttribute('aria-label', `Read more about ${post.title}`);

    cardBody.appendChild(title);
    cardBody.appendChild(meta);
    cardBody.appendChild(body);
    cardBody.appendChild(link);

    article.appendChild(cardBody);
    col.appendChild(article);

    postsContainer.appendChild(col);
  });
}
