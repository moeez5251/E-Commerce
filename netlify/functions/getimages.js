const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const imagesDir = path.join(__dirname, "../../assets/images/");

    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Images directory not found: ${imagesDir}`);
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
      body: JSON.stringify({ error: error.message }),
    };
  }
};
