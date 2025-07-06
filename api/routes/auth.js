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
		res.status(500).json(error);
	}
});

//!login

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(404).json("User not found");
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!validPassword) {
			res.status(403).send("Invalid Password!");
		}
		res.status(200).json(user);
	} catch (error) {
		return res.status(500).json(error);
	}
});

module.exports = router;
