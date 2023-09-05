import Link from 'next/link';

type PropsType = {
  posts: PostType[];
};

export default function Items({ posts }: PropsType) {
  return (
    <ul>
      {posts.map((post: PostType) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
