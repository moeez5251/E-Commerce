const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const slug = event.queryStringParameters.slug; 
    const imagesDir = path.join(__dirname, `../../assets/images/${slug}`); 

    console.log("Requested slug:", slug);
    console.log("Images directory:", imagesDir);
    console.log("Current working directory:", process.cwd());

    if (!slug) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ error: "Slug is required" }),
      };
    }

    if (!fs.existsSync(imagesDir)) {
      console.error(`Directory not found: ${imagesDir}`);
      throw new Error(`Directory not found: ${imagesDir}`);
    }

    const images = fs.readdirSync(imagesDir);
    return {
      statusCode: 200,
      headers: {
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
