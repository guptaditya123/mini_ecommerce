import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import imgRoutes from './routes/imgRoutes.js';
import productRoutes from './routes/productRecord.js';

dotenv.config();

const app =express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

connectDb();

app.use('/api/products',imgRoutes);
app.use('/api/allProducts',productRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World!');
}
);

