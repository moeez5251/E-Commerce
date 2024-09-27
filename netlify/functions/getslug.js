const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const { queryStringParameters } = event;
    const slug = queryStringParameters && queryStringParameters.slug; // Get slug from query parameters
    const imagesDir = path.join(process.cwd(), "public/assets/images", slug);

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
