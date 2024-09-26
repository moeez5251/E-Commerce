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

    const imagesDir = path.resolve(__dirname+"../../../"+`assets/Images/${slug}`);
    console.log(imagesDir);

    let images = fs.readdirSync(imagesDir);
    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `${error}`,
    };
  }
};
