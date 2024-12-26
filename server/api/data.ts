import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const store = getStore("images");

  // ตรวจสอบว่า request method เป็น POST
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // อ่านไฟล์จาก request body
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  // อัปโหลดไฟล์ไปยัง store
  await store.set(file.name, file);

  return new Response("File uploaded successfully");
};