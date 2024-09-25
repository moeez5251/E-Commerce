const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    const slug = event.path.split("/").pop();
    const imagesDir = path.join(__dirname, `../assets/images/${slug}/`);

    // Check if the directory exists
    if (!fs.existsSync(imagesDir)) {
      throw new Error("Directory not found");
    }

    let images = fs.readdirSync(imagesDir);

    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    return {
      statusCode: 404, // Change to 404 for not found errors
      body: JSON.stringify({ message: "Unable to find that color or directory" }),
    };
  }
};
