import express from 'express';
import mongoose from 'mongoose';
import cartRoutes from './src/routes/cartRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import productRoutes from "./src/routes/productRoutes.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/product', productRoutes);


mongoose
  .connect("mongodb://127.0.0.1:27017/codeme", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  }) 
  .then(() => console.log("DB Connection Successfull!"))  
  .catch((err) => { 
    console.log(err);
  }); 
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
