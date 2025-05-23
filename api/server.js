const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const cors = require("cors");
const port = 5000;

//routes

const categoryRoute = require("./routes/categories.js");

dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		throw error;
	}
};

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
	connect();
	console.log(`Server started on port ${port}`);
});
