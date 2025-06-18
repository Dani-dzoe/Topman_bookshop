import express from 'express';
import { checkout } from '../controllers/checkoutController.js';

const router = express.Router();

// http route for checkout api
router.post('/', checkout);

export default router;

