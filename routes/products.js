const express = require("express");
const bodyParser = require("body-parser");
const productsJSON = require("../products.json");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

router.get("/:id", function (req, res) {
	let id = parseInt(req.params.id);
	res.render("pages/product.ejs", { title: "Buy Page", productID: id, productsJSON });
});

router.post("/filter", function (req, res) {
	let searchFor = req.body.search.toLowerCase();
	// let items = [];
	// for (let i = 0; i < productsJSON.length; i++) {
	// 	for (const key in productsJSON[i]) {
	// 		if (productsJSON[i].hasOwnProperty(key)) {
	// 			const element = ("" + productsJSON[i][key]).toLowerCase();
	// 			// console.log(typeof element + " " + element);
	// 			// console.log(searchFor);
	// 			// console.log(element.includes(searchFor));
	// 			if (element.indexOf(searchFor) !== -1) {
	// 				items.push(productsJSON[i]);
	// 			}
	// 		}
	// 	}
	// }
	// console.log(items);
	// res.render("pages/product.ejs", { title: "Search Results", productsJSON: items });

	let filteredItems = productsJSON.filter(function (product) {
		return product.description.toLowerCase().indexOf(searchFor) !== -1;
	});
	// console.log(filteredItems);
	res.render("pages/search.ejs", { title: "Search Results", productsJSON: filteredItems, search: searchFor });
});

module.exports = router;
