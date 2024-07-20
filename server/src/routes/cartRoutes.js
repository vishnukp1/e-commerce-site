import express from 'express';
import { addToCart, viewCart, incrementCartItemQuantity, decrementCartItemQuantity, removeCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/add/:id', addToCart);
router.get('/view', viewCart);
router.put('/increment/:id', incrementCartItemQuantity);
router.put('/decrement/:id', decrementCartItemQuantity);
router.delete('/remove/:id', removeCart);

export default router;
 