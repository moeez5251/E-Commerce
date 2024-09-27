import fs from "fs";
import path from "path";

export default async (req, context) => {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    const imagesDir = path.join(process.cwd(), `public/assets/images/${slug}`);

    console.log("Requested slug:", slug); // Debugging log
    console.log("Looking for images in directory:", imagesDir); // Debugging log

    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug is required" }), {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
        },
      });
    }

    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Directory not found: ${imagesDir}`);
    }

    const images = fs.readdirSync(imagesDir).filter(file => 
      file.endsWith('.jpg') || file.endsWith('.webp')
    );

    console.log("Images found in slug:", images); // Debugging log

    return new Response(JSON.stringify(images), {
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
