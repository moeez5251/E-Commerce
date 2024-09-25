// functions/listImagesBySlug.js

const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const imagesDir = path.join(process.cwd(), "assets/images/");
    
    const slug = event.path.split("/").pop(); 

    if (!slug || slug.trim() === "") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Slug is required" }),
      };
    }

    const specificImagesDir = path.join(imagesDir, slug);
    
    if (!fs.existsSync(specificImagesDir)) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Directory not found for the specified slug" }),
      };
    }

    const images = fs.readdirSync(specificImagesDir);
    
    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    console.error("Error reading images directory:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to read images directory", details: error.message }),
    };
  }
};
