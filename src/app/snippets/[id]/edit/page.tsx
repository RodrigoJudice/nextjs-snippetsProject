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
  async function updateSnippet(id: number, code: string) {
    'use server'
    await db.snippet.update({
      where: { id },
      data: { code }
    })
    redirect('/');
  }

  return (
    <SnippetEditForm snippet={snippet} updateSnippet={updateSnippet} />
  );

}
