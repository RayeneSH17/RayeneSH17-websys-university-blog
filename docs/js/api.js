const POSTS_URL = 'data/posts.json';

export async function fetchPosts() {
  const response = await fetch(POSTS_URL);
  if (!response.ok) {
    throw new Error(`Failed to load posts (status: ${response.status})`);
  }
  return await response.json();
}
