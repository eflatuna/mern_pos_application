const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//!register

router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});
		await newUser.save();
		res.status(200).json("User has been created");
	} catch (error) {
		res.status(400).json(error);
	}
});

//!login

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		!user && req.status(404).send({ error: "User not found" });
		res.send(user);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;
