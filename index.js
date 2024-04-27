const express = require('express');

const cors = require('cors');
const userRoutes = require("./routes/User");
const postsRoutes = require('./routes/Posts')

const path = require('path');

const dotenv = require('dotenv');
const database = require('./database')
// const cookieParser = require("cookie-parser");

// const MongoClient = require('mongodb').MongoClient;

dotenv.config({
    path: './config.env'
})

const app = express();
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

const PORT = process.env.PORT || 3000;

//connecting  to mongodb
const uri = process.env.MONGO_URI;

database.connect();
//middlewares
app.use(express.json());
// app.use(cookieParser());

app.use('/auth', userRoutes);
app.use('/post', postsRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running..'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})


