import SnippetEditForm from '@/components/Snippet-edit-form';
import { db } from '@/db';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
interface SnippetEditPageProps {
  params: {
    id: string
  }
}
export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id)
  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <SnippetEditForm snippet={snippet} />
  );

}
