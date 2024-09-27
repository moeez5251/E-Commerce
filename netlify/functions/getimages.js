import fs from "fs";
import path from "path";

const getDirectories = (dir) => {
  return fs.readdirSync(dir).filter(file => {
    const filePath = path.join(dir, file);
    return fs.statSync(filePath).isDirectory();
  });
};

export default async (req, context) => {
  try {
    const imagesDir = path.join(process.cwd(), "public/assets/images");

    console.log("Looking for folders in directory:", imagesDir); 

    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Images directory not found: ${imagesDir}`);
    }

    const folders = getDirectories(imagesDir);

    console.log("Folders found:", folders); 

    return new Response(JSON.stringify(folders), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      },
    });
  }
};
