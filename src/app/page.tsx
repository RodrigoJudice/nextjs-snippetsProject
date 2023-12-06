import Link from 'next/link';
import { db } from '@/db';
import { Snippet } from 'next/font/google';

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className='flex justify-between items-center p-2 border rounded'>
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className='flex justify-between m-2 items-center'>
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link className='border p-2 rounded' href='/snippets/new'>New</Link>
      </div>
      <div className='flex flex-col gap-2'>{renderSnippets}</div>
    </div>
  );
}
