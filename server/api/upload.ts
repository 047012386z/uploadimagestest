import formidable from "formidable";
import fs from "fs";
import { getStore } from "@netlify/blobs";
import { defineEventHandler } from "h3";

// ตั้งค่าให้ formidable อัปโหลดไฟล์ไปยังโฟลเดอร์ `public/images`
const form = formidable({ 
  uploadDir: "./public/images", 
  keepExtensions: true, // เก็บนามสกุลของไฟล์
});

export default defineEventHandler(async (event) => {
  // ใช้ Promise เพื่อรอผลจากการประมวลผลไฟล์
  return new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      const uploadedFile = files.file[0];
      const fileName = uploadedFile.newFilename;
      const filePath = `/images/${fileName}`;

      // เก็บข้อมูลใน Netlify Blobs
      const imagesStore = getStore("images");
      imagesStore.set(fileName, filePath, {
        metadata: {
          uploadedAt: new Date().toISOString(),
        },
      });

      resolve({
        message: "File uploaded successfully",
        fileName,
        filePath,
      });
    });
  });
});
