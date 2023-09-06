'use client';

import { FormEventHandler, useState } from 'react';
import { usePosts } from '@/store';

export default function PostsBySearch() {
  const [search, setSearch] = useState('');
  const fetchPostsBySearch = usePosts((state) => state.fetchPostsBySearch);

  const handleSearch: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await fetchPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
