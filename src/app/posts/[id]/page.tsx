import { Metadata } from 'next';

type PropsType = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: PropsType): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

async function getData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

export default async function Post({ params: { id } }: PropsType) {
  const post = await getData(id);

  console.log(post);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
