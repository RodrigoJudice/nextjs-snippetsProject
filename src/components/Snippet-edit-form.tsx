'use client';
import { useState } from 'react'
import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';

interface SnippetEditFormProps {
  snippet: Snippet
  updateSnippet: (id: number, code: string) => void
}
export default function SnippetEditForm({ snippet, updateSnippet }: SnippetEditFormProps) {
  const [id] = useState(snippet.id);
  const [code, setCode] = useState(snippet.code);



  const handleEditorChange = (value: string = "") => {
    setCode(value);
  }

  const handleUpdate = () => {
    updateSnippet(id, code);
  }


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
      <button className='p-2 border rounded' onClick={handleUpdate}>Update</button>

    </div>
  )
}
