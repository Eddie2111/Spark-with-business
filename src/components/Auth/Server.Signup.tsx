import { redirect } from "next/navigation"
import Link from "next/link"
async function createTodo(data: FormData) {
    "use server"
  
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid Title")
    }
  
    redirect("/")
  }