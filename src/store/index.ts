import { create } from 'zustand';
import { getAllPosts, getPostsBySearch } from '@/helpers/getPosts';

export type UsePostsType = {
  posts: PostType[];
  isLoading: boolean;
  fetchAllPosts: () => Promise<void>;
  fetchPostsBySearch: (search: string) => Promise<void>;
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePosts = create<UsePostsType>((set) => ({
  posts: [],
  isLoading: false,
  fetchAllPosts: async () => {
    set({ isLoading: true });
    const posts = await getAllPosts();
    set({ posts, isLoading: false });
  },
  fetchPostsBySearch: async (search) => {
    set({ isLoading: true });
    const posts = await getPostsBySearch(search);
    set({ posts, isLoading: false });
  },
}));
