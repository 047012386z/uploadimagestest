import fs from "fs";

export default defineEventHandler(() => {
  const directory = "./public/images";
  const files = fs.readdirSync(directory).filter((file) => /\.(png|jpg|jpeg|gif)$/i.test(file));
  return files.map((file) => ({
    name: file,
    url: `/images/${file}`,
  }));
});
