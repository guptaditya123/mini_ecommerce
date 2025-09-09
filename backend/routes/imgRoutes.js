import express from "express";
import multer from "multer";
import { uploadProduct } from "../controllers/imgController.js";

const router = express.Router();

// Multer storage config → saves files to /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// POST /api/products/upload/img
router.post("/upload/img", upload.single("image"), uploadProduct);

export default router;
