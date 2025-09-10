import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import imgRoutes from './routes/imgRoutes.js';
import productRoutes from './routes/productRecord.js';
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

connectDb();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use('/api/products',imgRoutes);
app.use('/api/allProducts',productRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World!');
}
);

