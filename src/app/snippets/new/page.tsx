'use client';
import * as actions from "@/actions";
import { useFormState } from "react-dom";


export default function SnippetCreatePage() {

  const [formState, action] = useFormState(actions.createSnippet, { message: '' });

  return (
    <form action={action}>
      <h3 className="font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title" >Title</label>
          <input className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
            placeholder="Title" />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code" >Code</label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code" />
        </div>
        <div>
          {formState.message ?
            <div className="my-2 p-2 bg-red-200 rounded border-red-400">{formState.message}</div>
            : null}
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  )
}
