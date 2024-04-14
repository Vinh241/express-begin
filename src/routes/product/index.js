const express = require('express');
const productController = require('../../controllers/product.controller');
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router();
router.get('/getAllProducts', asyncHandler(productController.getAllProduct));
router.post('/addProduct', asyncHandler(productController.postProduct));
// router.post('/addProduct', (req,res,next)=>{
//   console.log(11)
// });

module.exports = router;