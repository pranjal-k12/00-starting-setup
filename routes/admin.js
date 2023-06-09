const { getAddProduct, postAddProduct} = require('../controllers/products')

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', getAddProduct)

// /admin/add-product => POST
router.post('/add-product', postAddProduct );

module.exports = router;

