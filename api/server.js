const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const connect = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://esrabaskaya84:e.1234@cluster0.kllqwsq.mongodb.net/"
		);
		console.log("Connected to MongoDB");
	} catch (error) {
		throw error;
	}
};

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
	connect();
	console.log(`Server started on port ${port}`);
});
