const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongooes = require("mongoose");
const postRoute = require("./routes/posts");

// Import Routes

const authRoute = require("./routes/auth");
dotenv.config();

// //connect to DB
mongooes.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to Database")
);

//middlewares

app.use(express.json());
// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute)

app.listen(3000, () => console.log("the server is listing on 3000"));
