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