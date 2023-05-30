const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const fs = require("fs");
// const path = require("path"); // Delete later if not in use.

const productRoutes = require("./routes/product-routes");
const authRoutes = require("./routes/auth-routes")
const HttpError = require("./models/http-error");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE"
  );
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);


app.use((request, response, next) => {
  const error = new HttpError("Could not find this route", 404);
  return next(error);
});

app.use((error, request, response, next) => {
  if (request.file) {
    fs.unlink(request.file.path, (err) => console.log(err));
  }
  if (response.headerSent) {
    console.log("Reached");
    return next(error);
  }
  console.log("Error middleware reached.");
  console.log(error);
  response.status(error.code || 500);
  response.json({ message: error.message || "An unknown error occured." });
});

// app.listen(PORT, () => {
//   console.log(`App has started on port ${PORT}`);
// });
// MongoDb Credentials
// super_user_fsw_developer
// Hasan@3135

// Configure to latest db later.
mongoose
  .connect(
    "mongodb+srv://super_user_fsw_developer:Hasan%403135@cluster0.qdoawaa.mongodb.net/"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("You are now connected!"))
  .catch((error) => {
    console.log(error);
  });
