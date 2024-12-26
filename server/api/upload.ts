import formidable from "formidable";
import fs from "fs";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const form = formidable({ uploadDir: "./public/images", keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ message: "File uploaded successfully", fields, files });
    });
  });
});
