'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { PostType, usePosts } from '@/store';
import { shallow } from 'zustand/shallow';

export default function Items() {
  const [posts, isLoading, fetchAllPosts] = usePosts<any>(
    (state) => [state.posts, state.isLoading, state.fetchAllPosts],
    shallow,
  );

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: PostType) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
