const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const { slug } = event.pathParameters;
    const imagesDir =`../../assets/images/${slug}`;
    let images = fs.readdirSync(imagesDir);
 
    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Unable to Find that color",
    };
  }
};