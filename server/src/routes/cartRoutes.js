import express from 'express';
import { addToCart, viewCart, incrementCartItemQuantity, decrementCartItemQuantity, removeCart } from '../controllers/cartController.js';
import tryCatch from '../middleware/tryCatch.js';

const router = express.Router();

router.post('/add/:id', tryCatch(addToCart));
router.get('/view', tryCatch(viewCart));
router.put('/increment/:id', tryCatch(incrementCartItemQuantity));
router.put('/decrement/:id', tryCatch(decrementCartItemQuantity));
router.delete('/remove/:id', tryCatch(removeCart));

export default router;
 