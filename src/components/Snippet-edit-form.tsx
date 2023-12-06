'use client';

import { startTransition, useState } from 'react'
import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import * as actions from '@/actions';
import { act } from 'react-dom/test-utils';
import { redirect } from 'next/navigation';


interface SnippetEditFormProps {
  snippet: Snippet

}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <span className='text-xl font-bold'>Edit Snippet</span>
      <Editor
        height="40vh"
        theme='vs-dark'
        language='javascript'
        options={{
          minimap: { enabled: false },
        }}
        defaultValue={code}
        onChange={handleEditorChange} />

      <form action={editSnippetAction}>
        <button type='submit' className='p-2 border rounded'>Save</button>
      </form>

    </div>
  )
}
