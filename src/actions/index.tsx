'use server';
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string): Promise<void> {

  await db.snippet.update({
    where: { id },
    data: { code }
  })
  redirect(`/snippets/${id}`);
}


export async function deleteSnippet(id: number): Promise<void> {
  await db.snippet.delete({
    where: { id }
  })
  redirect(`/`);
}
export async function createSnippet(formState: { message: string }, formData: FormData) {
  try {

    //Check the users inputs
    //If there are errors, return the errors
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return { message: 'Title must be longer' };
    }
    if (typeof code !== 'string' || code.length < 10) {
      return { message: 'Code must be longer' };
    }
    await db.snippet.create({
      data: {
        title,
        code,
      }
    });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    else {
      return { message: 'Somethin went wrong ...' };
    }
  }
  redirect('/');
}