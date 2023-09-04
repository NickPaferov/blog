import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Posts | Blog',
};

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
}

export default async function Posts() {
  const posts = await getData();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: PostType) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
