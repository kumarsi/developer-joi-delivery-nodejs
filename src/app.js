const express = require("express");
const cartController = require("./controllers/cartController");
const inventoryController = require("./controllers/inventoryController");

const app = express();
app.use(express.json());

// Add debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.post("/cart/product", (req, res) => {
  console.log("POST /cart/product route hit");
  cartController.addProductToCart(req, res);
});

app.get("/cart/view", (req, res) => {
  console.log("GET /cart/view route hit");
  cartController.viewCart(req, res);
});

app.get("/inventory/health", (req, res) => {
  console.log("GET /inventory/health route hit");
  inventoryController.fetchStoreInventoryHealth(req, res);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 app listening on port ${port}`);
});
