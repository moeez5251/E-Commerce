const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const { slug } = event.queryStringParameters || {}; 
    const imagesDir = path.join(process.cwd(), `public/assets/images/${slug}`);

    if (!slug) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Slug is required" }),
      };
    }

    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Directory not found: ${imagesDir}`);
    }

    const images = fs.readdirSync(imagesDir);
    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
