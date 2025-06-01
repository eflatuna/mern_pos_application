const Invoice = require("../models/Invoice.js");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
	try {
		const invoices = await invoice.find();
		res.status(200).json(invoices);
	} catch (error) {
		console.log(error);
	}
});

router.post("/add-invoice", async (req, res) => {
	try {
		const newInvoice = new Invoice(req.body);
		await newInvoice.save();
		res.status(200).json("invoice has been created");
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;
