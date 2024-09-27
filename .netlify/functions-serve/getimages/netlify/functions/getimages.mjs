
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/getimages.js
import fs from "fs";
import path from "path";
var getDirectories = (dir) => {
  return fs.readdirSync(dir).filter((file) => {
    const filePath = path.join(dir, file);
    return fs.statSync(filePath).isDirectory();
  });
};
var getimages_default = async (req, context) => {
  try {
    const imagesDir = path.join(process.cwd(), "public/assets/images");
    console.log("Looking for folders in directory:", imagesDir);
    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Images directory not found: ${imagesDir}`);
    }
    const folders = getDirectories(imagesDir);
    console.log("Folders found:", folders);
    return new Response(JSON.stringify(folders), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    });
  }
};
export {
  getimages_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZ2V0aW1hZ2VzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5jb25zdCBnZXREaXJlY3RvcmllcyA9IChkaXIpID0+IHtcclxuICAvLyBSZWFkIHRoZSBkaXJlY3RvcnkgYW5kIGZpbHRlciBmb3Igc3ViZGlyZWN0b3JpZXNcclxuICByZXR1cm4gZnMucmVhZGRpclN5bmMoZGlyKS5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXIsIGZpbGUpO1xyXG4gICAgcmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0RpcmVjdG9yeSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgY29udGV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbWFnZXNEaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWMvYXNzZXRzL2ltYWdlc1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkxvb2tpbmcgZm9yIGZvbGRlcnMgaW4gZGlyZWN0b3J5OlwiLCBpbWFnZXNEaXIpOyAvLyBEZWJ1Z2dpbmcgbG9nXHJcblxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGltYWdlc0RpcikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZXMgZGlyZWN0b3J5IG5vdCBmb3VuZDogJHtpbWFnZXNEaXJ9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9sZGVycyA9IGdldERpcmVjdG9yaWVzKGltYWdlc0Rpcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJGb2xkZXJzIGZvdW5kOlwiLCBmb2xkZXJzKTsgLy8gRGVidWdnaW5nIGxvZ1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZm9sZGVycyksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pLCB7XHJcbiAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFFakIsSUFBTSxpQkFBaUIsQ0FBQyxRQUFRO0FBRTlCLFNBQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxPQUFPLFVBQVE7QUFDeEMsVUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLElBQUk7QUFDcEMsV0FBTyxHQUFHLFNBQVMsUUFBUSxFQUFFLFlBQVk7QUFBQSxFQUMzQyxDQUFDO0FBQ0g7QUFFQSxJQUFPLG9CQUFRLE9BQU8sS0FBSyxZQUFZO0FBQ3JDLE1BQUk7QUFDRixVQUFNLFlBQVksS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLHNCQUFzQjtBQUVqRSxZQUFRLElBQUkscUNBQXFDLFNBQVM7QUFFMUQsUUFBSSxDQUFDLEdBQUcsV0FBVyxTQUFTLEdBQUc7QUFDN0IsWUFBTSxJQUFJLE1BQU0sK0JBQStCLFNBQVMsRUFBRTtBQUFBLElBQzVEO0FBRUEsVUFBTSxVQUFVLGVBQWUsU0FBUztBQUV4QyxZQUFRLElBQUksa0JBQWtCLE9BQU87QUFFckMsV0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLE9BQU8sR0FBRztBQUFBLE1BQzNDLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLCtCQUErQjtBQUFBLFFBQy9CLGdDQUFnQztBQUFBLFFBQ2hDLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sVUFBVSxNQUFNLE9BQU87QUFDckMsV0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLEVBQUUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQUEsTUFDNUQsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1AsK0JBQStCO0FBQUEsUUFDL0IsZ0NBQWdDO0FBQUEsUUFDaEMsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
