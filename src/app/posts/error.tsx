'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1 className="error">{error.message}</h1>;
}
