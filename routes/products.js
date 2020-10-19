var express = require('express');
var router = express.Router();
const ProductModel = require('../models/products');

router.get('/', function(req,res,next) {
    ProductModel.find((err, people) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) return res.status(500).send(err)
        // send the list of all people
        return res.status(200).send(people);
    });
})

router.get('/seed', function(req, res, next) {
    let myProduct = new ProductModel({
        name: "LG Big screen TV",
        price: 25,
        description: "An amazing LG experience"
    })
    myProduct.save(function(err) {
        if (err) {
            return res.send(err);
        } else {
            return res.send("product added:" + myProduct);
        }
    });
});

module.exports = router;
