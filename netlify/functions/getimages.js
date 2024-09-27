const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const imagesDir = path.join(__dirname, "../../assets/images/");
    console.log(imagesDir);
    console.log(path.join(__dirname, "../../public/assets/images/"))
    console.log(path.join(__dirname, "/assets/images/"));
    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Images directory not found: ${imagesDir}`);
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
    console.error("Error reading images directory:", error.message);
    return {
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
