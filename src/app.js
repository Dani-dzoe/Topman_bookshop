import express from 'express';
import bodyParser from 'body-parser';
import cartRoutes from './routes/cartRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';

const app = express();
const PORT = 3000;

// Json Parser
app.use(bodyParser.json());

app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);

// Listen to http-server on preferable port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
