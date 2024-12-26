import { getStore } from "@netlify/blobs";

export default async (req: Request) => {
  const imagesStore = getStore("images");

  // อ่านข้อมูลไฟล์จาก Request Body
  const { name, url } = await req.json();

  // เก็บข้อมูลไฟล์ (URL และ Metadata)
  await imagesStore.set(name, url, {
    metadata: {
      uploadedAt: new Date().toISOString(),
    },
  });

  return new Response("Image uploaded successfully");
};
