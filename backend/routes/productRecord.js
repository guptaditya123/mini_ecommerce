import express from 'express';
import {  getAllProducts , getCartRecord } from '../controllers/productController.js';

const router = express.Router();
// GET /api/products
router.get('/', getAllProducts);
router.post('/cartItems', getCartRecord);

export default router;