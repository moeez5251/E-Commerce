const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const imagesDir = path.join(__dirname, "../assets/images/");
    let images = fs.readdirSync(imagesDir);

    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to read images directory" }),
    };
  }
};