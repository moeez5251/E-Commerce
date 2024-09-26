const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const { slug } = event.queryStringParameters || {};
    
    if (!slug) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Slug is required" }),
      };
    }

    const imagesDir = path.join(process.cwd(), `assets/images/${slug}`);
    console.log(`Looking for directory: ${imagesDir}`); 
    if (!fs.existsSync(imagesDir)) {
      console.error(`Directory not found: ${imagesDir}`); 
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Directory not found", path: imagesDir }),
      };
    }

    let images = fs.readdirSync(imagesDir);
    console.log(`Images found: ${images}`); 
    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    console.error(`Error: ${error}`); 
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `${error}` }),
    };
  }
};
