import { db } from "@/db"
import { redirect } from "next/navigation";


export default function SnippetCreatePage() {

  async function createSnippet(formData: FormData) {
    // This needs tob a server action!
    'use server';

    //Check the users inputs
    //If there are errors, return the errors
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    //Create a new snippet in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      }
    })
    // redirect to back to root route
    redirect('/');
  }

  return (
    <form action={createSnippet}>
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
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  )
}
