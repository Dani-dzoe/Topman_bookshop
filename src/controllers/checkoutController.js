import { cart } from '../models/cartModel.js';

export const checkout = (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const orderSummary = {
    items: [...cart],
    totalAmount,
    date: new Date().toISOString()
  };

  // Clear the cart
  cart.length = 0;

  res.status(200).json({
    message: 'Checkout successful',
    orderSummary
  });
};
