import multer from "multer";
import {v2 as cloudinary} from "cloudinary"
import {CloudinaryStorage} from "muller-storage-cloudinary"
import { config } from "../../config.js";


CloudinaryStorage.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "nombre",
        allowed_formats: ["jpg", "png", "jpeg", "pdf", "doc"]
    }
})

const upload = multer ({storage})

export default upload
