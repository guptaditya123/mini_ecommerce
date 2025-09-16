import Product from "../models/productModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const getCartRecord = async (req, res) => {
  try {
    console.log("📥 Incoming cartItems:", req.body.cartItems);

    const { cartItems } = req.body;
    if (!Array.isArray(cartItems)) {
      console.log("⚠️ cartItems is not an array");
      return res.status(400).json({ message: "cartItems must be an array" });
    }

    const ids = cartItems.map((item) => item._id);
    console.log("🔍 Fetching products for IDs:", ids);

    const products = await Product.find({ _id: { $in: ids } });
    console.log("📦 Found products:", products);

    const productsWithQty = products.map((product) => {
      const match = cartItems.find((c) => c._id === product._id.toString());
      return { ...product.toObject(), quantity: match?.quantity || 1 };
    });

    console.log("📝 Returning products with quantity:", productsWithQty);
    res.status(200).json(productsWithQty);
  } catch (error) {
    console.error("💥 Server error:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


