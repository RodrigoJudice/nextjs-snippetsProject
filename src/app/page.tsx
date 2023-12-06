import { db } from '@/db';

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        {snippet.title}
      </div>
    );
  });

  return (
    <div>
      {renderSnippets}
    </div>
  );
}
