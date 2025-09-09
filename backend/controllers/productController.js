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
    try{
        const {cartItems} = req.body;
        
    }catch(error){
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}