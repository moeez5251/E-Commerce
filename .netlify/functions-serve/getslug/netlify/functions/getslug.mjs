
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZ2V0c2x1Zy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgY29udGV4dCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gICAgY29uc3Qgc2x1ZyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2x1Z1wiKTtcclxuICAgIGNvbnN0IGltYWdlc0RpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBgcHVibGljL2Fzc2V0cy9pbWFnZXMvJHtzbHVnfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdGVkIHNsdWc6XCIsIHNsdWcpOyBcclxuICAgIGNvbnNvbGUubG9nKFwiTG9va2luZyBmb3IgaW1hZ2VzIGluIGRpcmVjdG9yeTpcIiwgaW1hZ2VzRGlyKTtcclxuXHJcbiAgICBpZiAoIXNsdWcpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIlNsdWcgaXMgcmVxdWlyZWRcIiB9KSwge1xyXG4gICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUnLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoaW1hZ2VzRGlyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERpcmVjdG9yeSBub3QgZm91bmQ6ICR7aW1hZ2VzRGlyfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IGZzLnJlYWRkaXJTeW5jKGltYWdlc0RpcikuZmlsdGVyKGZpbGUgPT4gXHJcbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcGcnKSB8fCBmaWxlLmVuZHNXaXRoKCcud2VicCcpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiSW1hZ2VzIGZvdW5kIGluIHNsdWc6XCIsIGltYWdlcyk7IFxyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoaW1hZ2VzKSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZScsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUVqQixJQUFPLGtCQUFRLE9BQU8sS0FBSyxZQUFZO0FBQ3JDLE1BQUk7QUFDRixVQUFNLE1BQU0sSUFBSSxJQUFJLElBQUksR0FBRztBQUMzQixVQUFNLE9BQU8sSUFBSSxhQUFhLElBQUksTUFBTTtBQUN4QyxVQUFNLFlBQVksS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLHdCQUF3QixJQUFJLEVBQUU7QUFFekUsWUFBUSxJQUFJLG1CQUFtQixJQUFJO0FBQ25DLFlBQVEsSUFBSSxvQ0FBb0MsU0FBUztBQUV6RCxRQUFJLENBQUMsTUFBTTtBQUNULGFBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLE9BQU8sbUJBQW1CLENBQUMsR0FBRztBQUFBLFFBQ2pFLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxVQUNQLCtCQUErQjtBQUFBLFVBQy9CLGdDQUFnQztBQUFBLFVBQ2hDLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUVBLFFBQUksQ0FBQyxHQUFHLFdBQVcsU0FBUyxHQUFHO0FBQzdCLFlBQU0sSUFBSSxNQUFNLHdCQUF3QixTQUFTLEVBQUU7QUFBQSxJQUNyRDtBQUVBLFVBQU0sU0FBUyxHQUFHLFlBQVksU0FBUyxFQUFFO0FBQUEsTUFBTyxVQUM5QyxLQUFLLFNBQVMsTUFBTSxLQUFLLEtBQUssU0FBUyxPQUFPO0FBQUEsSUFDaEQ7QUFFQSxZQUFRLElBQUkseUJBQXlCLE1BQU07QUFFM0MsV0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLE1BQU0sR0FBRztBQUFBLE1BQzFDLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLCtCQUErQjtBQUFBLFFBQy9CLGdDQUFnQztBQUFBLFFBQ2hDLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sVUFBVSxNQUFNLE9BQU87QUFDckMsV0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLEVBQUUsT0FBTyxNQUFNLFFBQVEsQ0FBQyxHQUFHO0FBQUEsTUFDNUQsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1AsK0JBQStCO0FBQUEsUUFDL0IsZ0NBQWdDO0FBQUEsUUFDaEMsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
