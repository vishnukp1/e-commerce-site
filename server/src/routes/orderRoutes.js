import express from 'express';
import { checkout } from '../controllers/orderController.js';
import tryCatch from '../middleware/tryCatch.js';

const router = express.Router();

router.post('/checkout',tryCatch(checkout));

export default router;
