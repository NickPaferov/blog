import { Metadata } from 'next';
import Items from '@/components/Items';
import PostsBySearch from '@/components/PostsBySearch';

export const metadata: Metadata = {
  title: 'Posts | Blog',
};

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <PostsBySearch />
      <Items />
    </>
  );
}
