const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const imagesDir = path.join(__dirname, "../../assets/images");
    
    console.log("Images directory:", imagesDir);
    console.log("Current working directory:", process.cwd());

    if (!fs.existsSync(imagesDir)) {
      console.error(`Directory not found: ${imagesDir}`);
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `Directory not found: ${imagesDir}` }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Directory exists." }),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
