const User = require("../models/User.js");
const express = require("express");
const router = express.Router();

//register

router.post("/register", async (req, res) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.status(200).json("User has been created");
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;
