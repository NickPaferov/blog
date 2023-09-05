'use client';

import { FormEventHandler, useState } from 'react';
import { PostType } from '@/components/Items';
import { getPostsBySearch } from '@/helpers/getPosts';

type PropsType = {
  onSearch: (value: PostType[]) => void;
};

export default function PostsBySearch({ onSearch }: PropsType) {
  const [search, setSearch] = useState('');

  const handleSearch: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
