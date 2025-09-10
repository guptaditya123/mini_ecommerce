import Product from "../models/productModel.js";

// Upload image + product details
export const uploadProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { name, brand, price, quantity } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`; // ✅ relative path

    const newProduct = new Product({
      name,
      brand,
      price,
      quantity,
      image: imageUrl,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
