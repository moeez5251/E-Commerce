
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/getslug.js
import fs from "fs";
import path from "path";
var getslug_default = async (req, context) => {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    const imagesDir = path.join(process.cwd(), `public/assets/images/${slug}`);
    console.log("Requested slug:", slug);
    console.log("Looking for images in directory:", imagesDir);
    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug is required" }), {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json"
        }
      });
    }
    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Directory not found: ${imagesDir}`);
    }
    const images = fs.readdirSync(imagesDir).filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".webp")
    );
    console.log("Images found in slug:", images);
    return new Response(JSON.stringify(images), {
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
  getslug_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZ2V0c2x1Zy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgY29udGV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gICAgY29uc3Qgc2x1ZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2x1Z1wiKTtcclxuICAgIGNvbnN0IGltYWdlc0RpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBgcHVibGljL2Fzc2V0cy9pbWFnZXMvJHtzbHVnfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGVkIHNsdWc6XCIsIHNsdWcpOyAvLyBEZWJ1Z2dpbmcgbG9nXHJcbiAgICBjb25zb2xlLmxvZyhcIkxvb2tpbmcgZm9yIGltYWdlcyBpbiBkaXJlY3Rvcnk6XCIsIGltYWdlc0Rpcik7IC8vIERlYnVnZ2luZyBsb2dcclxuXHJcbiAgICBpZiAoIXNsdWcpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIlNsdWcgaXMgcmVxdWlyZWRcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoaW1hZ2VzRGlyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERpcmVjdG9yeSBub3QgZm91bmQ6ICR7aW1hZ2VzRGlyfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IGZzLnJlYWRkaXJTeW5jKGltYWdlc0RpcikuZmlsdGVyKGZpbGUgPT4gXHJcbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcGcnKSB8fCBmaWxlLmVuZHNXaXRoKCcud2VicCcpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiSW1hZ2VzIGZvdW5kIGluIHNsdWc6XCIsIGltYWdlcyk7IC8vIERlYnVnZ2luZyBsb2dcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGltYWdlcyksIHtcclxuICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pLCB7XHJcbiAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFFakIsSUFBTyxrQkFBUSxPQUFPLEtBQUssWUFBWTtBQUNyQyxNQUFJO0FBQ0YsVUFBTSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDM0IsVUFBTSxPQUFPLElBQUksYUFBYSxJQUFJLE1BQU07QUFDeEMsVUFBTSxZQUFZLEtBQUssS0FBSyxRQUFRLElBQUksR0FBRyx3QkFBd0IsSUFBSSxFQUFFO0FBRXpFLFlBQVEsSUFBSSxtQkFBbUIsSUFBSTtBQUNuQyxZQUFRLElBQUksb0NBQW9DLFNBQVM7QUFFekQsUUFBSSxDQUFDLE1BQU07QUFDVCxhQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRSxPQUFPLG1CQUFtQixDQUFDLEdBQUc7QUFBQSxRQUNqRSxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUCwrQkFBK0I7QUFBQSxVQUMvQixnQ0FBZ0M7QUFBQSxVQUNoQyxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFFQSxRQUFJLENBQUMsR0FBRyxXQUFXLFNBQVMsR0FBRztBQUM3QixZQUFNLElBQUksTUFBTSx3QkFBd0IsU0FBUyxFQUFFO0FBQUEsSUFDckQ7QUFFQSxVQUFNLFNBQVMsR0FBRyxZQUFZLFNBQVMsRUFBRTtBQUFBLE1BQU8sVUFDOUMsS0FBSyxTQUFTLE1BQU0sS0FBSyxLQUFLLFNBQVMsT0FBTztBQUFBLElBQ2hEO0FBRUEsWUFBUSxJQUFJLHlCQUF5QixNQUFNO0FBRTNDLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFBQSxNQUMxQyxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCwrQkFBK0I7QUFBQSxRQUMvQixnQ0FBZ0M7QUFBQSxRQUNoQyxnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsU0FBUyxPQUFPO0FBQ2QsWUFBUSxNQUFNLFVBQVUsTUFBTSxPQUFPO0FBQ3JDLFdBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLE9BQU8sTUFBTSxRQUFRLENBQUMsR0FBRztBQUFBLE1BQzVELFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLCtCQUErQjtBQUFBLFFBQy9CLGdDQUFnQztBQUFBLFFBQ2hDLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
