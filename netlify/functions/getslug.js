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

    const imagesDir = `assets/Images/${slug}`;

    if (!fs.existsSync(imagesDir)) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Directory not found" }),
      };
    }

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