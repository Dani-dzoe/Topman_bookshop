import { cart } from '../models/cartModel.js';
import { v4 as uuidv4 } from 'uuid';

// Add items to cart
export const addToCart = (req, res) => {
  const { bookId, title, price, quantity } = req.body;
  const item = {
    id: uuidv4(),
    bookId,
    title,
    price,
    quantity
  };
  cart.push(item);
  res.status(201).json({ message: 'Item added to cart', item });
};

// Get cart items
export const getCartItems = (req, res) => {
  res.json(cart);
};

// Remove item from cart
export const removeFromCart = (req, res) => {
  const { id } = req.params;
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    const removed = cart.splice(index, 1);
    res.json({ message: 'Item removed', removed });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

