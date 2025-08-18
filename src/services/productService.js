const SeedData = require("../seedData/seedData");

const productService = {
  getProduct(productId, outletId) {
    console.log("=====Looking for product:", productId, "in outlet:", outletId);
    console.log("=====Available products:", SeedData.getAllProducts());

    const product = SeedData.getAllProducts().find((groceryProduct) => {
      console.log(
        "=====Checking product:",
        groceryProduct.productId,
        "in store:",
        groceryProduct.store?.outletId
      );
      return (
        groceryProduct.productId === productId &&
        groceryProduct.store &&
        groceryProduct.store.outletId === outletId
      );
    });

    console.log("=====Found product:", product);
    return product;
  },
};

module.exports = productService;
