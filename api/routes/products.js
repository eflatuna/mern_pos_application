const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		console.log(error);
	}
});

router.post("/add-Product", async (req, res) => {
	try {
		const newProduct = new Product(req.body);
		await newProduct.save();
		res.status(200).json("Product has been created");
	} catch (error) {
		res.status(400).json(error);
	}
});

router.put("/update-Product", async (req, res) => {
	try {
		await Product.findOneAndUpdate({ _id: req.body.ProductId }, req.body);
		res.status(200).json("Product has been updated");
	} catch (error) {
		console.log(error);
	}
});
router.delete("/delete-Product", async (req, res) => {
	try {
		await Product.findOneAndDelete({ _id: req.body.ProductId });
		res.status(200).json("Product deleted");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
