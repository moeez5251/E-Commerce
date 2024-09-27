const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    // Retrieve the slug from query parameters
    const slug = event.queryStringParameters?.slug; 
    const imagesDir = path.join(process.cwd(), `public/assets/images/${slug}`);
    
    if (!slug) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Slug is required" }),
      };
    }

    // Check if the directory exists
    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Directory not found: ${imagesDir}`);
    }

    // Read images from the directory
    const images = fs.readdirSync(imagesDir);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(images),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
