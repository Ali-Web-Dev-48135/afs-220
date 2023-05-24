const express = require("express");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/:productId", productController.getProductById);

router.get("/", () => {
    console.log("Products Get All Route Hit...");
});


module.exports = router;
