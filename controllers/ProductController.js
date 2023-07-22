import product from "../models/ProductModel.js";
import { errorResp, success } from "../utils/Response.js";
import { productSchema, productUpdateSchema } from "../validators/ProductValidator.js";

export const getProducts = async (req, res, next) => {
  try {
    const result = await product.findAll();
    success(res, 'success', result);
  } catch (error) {
    next(error);
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const result = await product.findOne(
      {
        where:
        {
          id:req.params.id
        }
      }
    );
    let msg = 'Success'; 
    let status = 200;

    if(result == null) {
      msg = 'Not Found';
      status = 404;
    } 
    
    success(res, msg, result, status);
  } catch (error) {
    next(error);
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const body = await productSchema.validateAsync(req.body);
    const result = await product.create(body);
    success(res, 'create product success', result, 201);
  } catch (error) {
    next(error);
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const body = await productUpdateSchema.validateAsync(req.body);
    const result = await product.update(body,{
      where:{
        id: req.params.id
      }
    });
    const msg = (result == 1) ? 'update product success' : 'Id Not found';
    success(res, msg, {});
  } catch (error) {
    next(error);
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const result = await product.destroy({
      where: {
        id: req.params.id
      }
    });
    const msg = (result == 1) ? 'delete product success' : 'Id Not found';
    success(res, msg, {});

  } catch (error) {
    next(error);
  }
}