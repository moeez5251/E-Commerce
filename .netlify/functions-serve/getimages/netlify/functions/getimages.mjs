
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZ2V0aW1hZ2VzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5jb25zdCBnZXREaXJlY3RvcmllcyA9IChkaXIpID0+IHtcclxuICByZXR1cm4gZnMucmVhZGRpclN5bmMoZGlyKS5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXIsIGZpbGUpO1xyXG4gICAgcmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0RpcmVjdG9yeSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgY29udGV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbWFnZXNEaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWMvYXNzZXRzL2ltYWdlc1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkxvb2tpbmcgZm9yIGZvbGRlcnMgaW4gZGlyZWN0b3J5OlwiLCBpbWFnZXNEaXIpOyBcclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoaW1hZ2VzRGlyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlcyBkaXJlY3Rvcnkgbm90IGZvdW5kOiAke2ltYWdlc0Rpcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb2xkZXJzID0gZ2V0RGlyZWN0b3JpZXMoaW1hZ2VzRGlyKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkZvbGRlcnMgZm91bmQ6XCIsIGZvbGRlcnMpOyBcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGZvbGRlcnMpLCB7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSwge1xyXG4gICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBRWpCLElBQU0saUJBQWlCLENBQUMsUUFBUTtBQUM5QixTQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsT0FBTyxVQUFRO0FBQ3hDLFVBQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxJQUFJO0FBQ3BDLFdBQU8sR0FBRyxTQUFTLFFBQVEsRUFBRSxZQUFZO0FBQUEsRUFDM0MsQ0FBQztBQUNIO0FBRUEsSUFBTyxvQkFBUSxPQUFPLEtBQUssWUFBWTtBQUNyQyxNQUFJO0FBQ0YsVUFBTSxZQUFZLEtBQUssS0FBSyxRQUFRLElBQUksR0FBRyxzQkFBc0I7QUFFakUsWUFBUSxJQUFJLHFDQUFxQyxTQUFTO0FBRTFELFFBQUksQ0FBQyxHQUFHLFdBQVcsU0FBUyxHQUFHO0FBQzdCLFlBQU0sSUFBSSxNQUFNLCtCQUErQixTQUFTLEVBQUU7QUFBQSxJQUM1RDtBQUVBLFVBQU0sVUFBVSxlQUFlLFNBQVM7QUFFeEMsWUFBUSxJQUFJLGtCQUFrQixPQUFPO0FBRXJDLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxPQUFPLEdBQUc7QUFBQSxNQUMzQyxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCwrQkFBK0I7QUFBQSxRQUMvQixnQ0FBZ0M7QUFBQSxRQUNoQyxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsU0FBUyxPQUFPO0FBQ2QsWUFBUSxNQUFNLFVBQVUsTUFBTSxPQUFPO0FBQ3JDLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLE9BQU8sTUFBTSxRQUFRLENBQUMsR0FBRztBQUFBLE1BQzVELFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLCtCQUErQjtBQUFBLFFBQy9CLGdDQUFnQztBQUFBLFFBQ2hDLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
