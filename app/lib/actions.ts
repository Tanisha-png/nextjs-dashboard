"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice" };
  }
}
