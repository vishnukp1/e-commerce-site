import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';

export const addToCart = async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ 
            status: "Error", 
            message: "Product not found" 
        });
    }

    let cartItem = await Cart.findOne({ productId: product._id });
    if (cartItem) {
        cartItem.quantity++;
        await cartItem.save();
        return res.status(200).json({ 
            status: "Success", 
            message: "Cart product incremented", 
            data: cartItem 
        });
    } else {
        cartItem = await Cart.create({ productId: product._id, quantity: 1 });
        return res.status(201).json({ 
            status: "Success", 
            message: "Product added to cart successfully", 
            data: cartItem 
        });
    }
};

export const viewCart = async (req, res) => {
    const cart = await Cart.find().populate('productId');
    res.status(200).json({
        status: "Success",
        message: "Cart retrieved successfully",
        data: cart
    });
};

export const incrementCartItemQuantity = async (req, res) => {
    const productId = req.params.id;
    const { quantityIncrement } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ 
            status: "Error", 
            message: "Product not found" 
        });
    }

    let cartItem = await Cart.findOne({ productId: product._id });
    if (cartItem) {
        cartItem.quantity += quantityIncrement;
        await cartItem.save();
        res.status(200).json({
            status: "Success",
            message: "Quantity incremented",
            data: cartItem
        });
    } else {
        res.status(400).json({
            status: "Error",
            message: "Product not found in the cart"
        });
    }
};

export const decrementCartItemQuantity = async (req, res) => {
    const productId = req.params.id;
    const { quantityDecrement } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ 
            status: "Error", 
            message: "Product not found" 
        });
    }

    let cartItem = await Cart.findOne({ productId: product._id });
    if (cartItem) {
        cartItem.quantity = Math.max(cartItem.quantity - quantityDecrement, 1);
        await cartItem.save();
        res.status(200).json({
            status: "Success",
            message: "Quantity decremented",
            data: cartItem
        });
    } else {
        res.status(400).json({
            status: "Error",
            message: "Product not found in the cart"
        });
    }
};

export const removeCart = async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ 
            status: "Error", 
            message: "Product not found" 
        });
    }

    const cartItem = await Cart.findOneAndDelete({ productId: product._id });
    if (!cartItem) {
        return res.status(400).json({
            status: "Error",
            message: "Product not found in the cart"
        });
    }

    res.status(200).json({
        status: "Success",
        message: "Product removed successfully",
        data: cartItem
    });
};
