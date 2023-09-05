export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
}
