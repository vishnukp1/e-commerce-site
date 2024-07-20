import Order from '../models/orderModel.js';
import Cart from '../models/cartModel.js';

const promoCodes = {
    'DISCOUNT10': 10,
    'DISCOUNT20': 20
};

export const checkout = async (req, res) => {
    const { promoCode } = req.body;

    const cartItems = await Cart.find().populate('productId');

    let totalAmount = 0;
    for (const item of cartItems) {
        if (item.productId) {
            totalAmount += item.quantity * item.productId.price;
        }
    }

    let discount = 0;
    if (promoCode && promoCodes[promoCode]) {
        discount = (totalAmount * promoCodes[promoCode]) / 100;
    }
    const finalAmount = totalAmount - discount;

    const order = await Order.create({
        products: cartItems.map(item => ({
            productId: item.productId._id,
            quantity: item.quantity
        })),
        totalAmount,
        discount,
        finalAmount
    });

    await Cart.deleteMany({});

    res.status(200).json({
        status: "Success",
        message: "Order placed successfully",
        data: order
    });
};
