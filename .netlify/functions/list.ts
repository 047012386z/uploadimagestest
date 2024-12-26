import { getStore } from "@netlify/blobs";

export default async () => {
  const imagesStore = getStore("images");

  // ดึงรายการคีย์ทั้งหมดใน store
  const keys = await imagesStore.list();

  // ดึงข้อมูลทั้งหมดตามคีย์
  const images = await Promise.all(
    keys.map(async (key) => {
      const { value, metadata } = await imagesStore.get(key);
      return {
        name: key,
        url: value,
        uploadedAt: metadata.uploadedAt,
      };
    })
  );

  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
};
