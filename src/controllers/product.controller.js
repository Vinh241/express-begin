const { BadRequestError } = require("../core/error.response");
const { SuccessResponse } = require("../core/success.response");
const { ProductService } = require("../services/product.service");
const { v4: uuidv4 } = require('uuid');
class ProductController {
  getAllProduct = async (req, res, next) => {
    new SuccessResponse({
      metadata: await ProductService.getAllProduct()
    }).send(res);
  }
  postProduct = async (req, res, next) => {
    try {
      const id = uuidv4()
      const thumbnail = req.body.thumbnail;
      const price = req.body.price;
      const title = req.body.title;
      const quantity = req.body.quantity;
      const CategoryId = req.body.CategoryId;
      return ProductService.postProduct(id, thumbnail, price, title, quantity, CategoryId).then(result => {
        new SuccessResponse({ message: "Created Successfull" }).send(res)
      });

    } catch (err) {
      throw new BadRequestError();
    }
  }
}
module.exports = new ProductController();