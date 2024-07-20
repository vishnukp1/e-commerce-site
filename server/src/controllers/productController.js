import Products from '../models/productModel.js';

export const createProduct = async (req, res) => {
    const { name, description, price, image } = req.body;

    const newProduct = new Products({ name, description, price, image });
    await newProduct.save();

    res.status(201).json({
        status: "Success",
        message: "Product created successfully",
        data: newProduct
    });
};


export const getAllProducts = async (req, res) => {
    const products = await Products.find();
    res.status(200).json({
        status: "Success",
        message: "Products retrieved successfully",
        data: products
    });
};



