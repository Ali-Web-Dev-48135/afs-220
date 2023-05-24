

const HttpError = require("../models/http-error");

const mongoose = require("mongoose");

const getProductById = async (request, response, next) => {
  const productId = request.params.productId;
  let product;
  try {
    // find product in Mongoose Schema (Mongodb db)
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }

  response.json({ product: product.toObject({ getters: true }) });
};





exports.getProductById = getProductById;
