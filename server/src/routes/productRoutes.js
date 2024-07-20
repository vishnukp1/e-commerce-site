import express from 'express';
import { getAllProducts,createProduct} from '../controllers/productController.js';
import tryCatch from '../middleware/tryCatch.js';

const router = express.Router();

router.get('/', tryCatch(getAllProducts));
router.post('/', tryCatch(createProduct));


export default router;
