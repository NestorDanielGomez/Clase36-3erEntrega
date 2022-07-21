import { ProductModel } from "../models";

const find = (id) => {
  if (id) return ProductModel.findById(id);

  return ProductModel.find();
};

const findByCategory = (categoryId) => ProductModel.find({ categoryId });

const findByBrand = (brandId) => ProductModel.find({ brandId });

const findByVarietal = (varietalId) => ProductModel.find({ varietalId });

const create = (newProduct) => ProductModel.create(newProduct);

const update = (id, data) =>
  ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => ProductModel.findByIdAndDelete(id);

const addStock = async (id, stock) => {
  const product = await find(id);

  product.stock += stock;

  await product.save();
};

const removeStock = async (id, stock) => {
  const product = await find(id);

  if (product.stock < stock) product.stock = 0;
  else product.stock -= stock;

  await product.save();
};

export default {
  find,
  create,
  update,
  remove,
  findByCategory,
  findByBrand,
  findByVarietal,
  addStock,
  removeStock,
};
