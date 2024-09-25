// functions/listAllImages.js

const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const imagesDir = path.join(process.cwd(), "assets/images/");

    if (!fs.existsSync(imagesDir)) {
      throw new Error("Images directory not found");
    }

    const images = fs.readdirSync(imagesDir);
    
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
