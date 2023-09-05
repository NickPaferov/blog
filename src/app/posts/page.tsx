'use client';

import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { getAllPosts } from '@/helpers/getPosts';
import Items, { PostType } from '@/components/Items';

export const metadata: Metadata = {
  title: 'Items | Blog',
};

export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((res) => setPosts(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {isLoading ? <h3>Loading...</h3> : <Items posts={posts} />}
    </>
  );
}
