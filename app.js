const express = require("express");
const path = require("path");
const products = require("./routes/products");
const productsJSON = require("./products.json");

// make an instance of express
const app = express();

// setting ejs as view engine
app.set("view engine", "ejs");

app.use("/products", products);

// make public folder as static folder
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/products", express.static(path.join(__dirname, "./public")));

// define routes
app.get("/", function (req, res) {
	res.render("pages/index.ejs", { title: "Home", productsJSON });
});

app.get("/contact", function (req, res) {
	res.render("pages/contactUs.ejs", { title: "Contact us" });
});

app.get("/about", function (req, res) {
	res.render("pages/aboutUs.ejs", { title: "About us" });
});

app.listen(3000);
console.log("Server starts listening...");
