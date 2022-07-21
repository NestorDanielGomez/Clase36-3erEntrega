import { ProductsAPI } from "../api";

const getAllProducts = async (req, res) => {
  const products = await ProductsAPI.find();
  res.json({
    data: products,
  });
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsAPI.find(id);

  if (!product) return res.status(404).json({ msg: "Product not found" });

  res.json({
    data: product,
  });
};

const createProduct = async (req, res) => {
  const {
    name,
    description,
    img,
    stock,
    price,
    categoryId,
    varietalId,
    brandId,
  } = req.body;

  if (
    !name ||
    !description ||
    !img ||
    !stock ||
    !price ||
    !categoryId ||
    !varietalId ||
    !brandId
  )
    return res.status(400).json({ msg: "Invalid Body parameter" });

  const newProduct = {
    name,
    description,
    img,
    price,
    stock,
    categoryId,
    varietalId,
    brandId,
  };

  const product = await ProductsAPI.create(newProduct);

  res.json({
    msg: "Producto Creado con Exito",
    data: product,
  });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    img,
    price,
    stock,
    categoryId,
    varietalId,
    brandId,
  } = req.body;

  if (
    !name &&
    !description &&
    !img &&
    !stock &&
    !price &&
    !categoryId &&
    !varietalId &&
    !brandId
  )
    return res.status(400).json({ msg: "Invalid Body parameter" });

  const newData = {
    name,
    description,
    img,
    price,
    stock,
    categoryId,
    varietalId,
    brandId,
  };

  const productUpdated = await ProductsAPI.update(id, newData);

  res.json({
    msg: "product updated",
    data: productUpdated,
  });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await ProductsAPI.find(id);

  if (!product) return res.status(404).json({ msg: "Product not found" });

  await ProductsAPI.remove(id);

  res.json({
    msg: "Product deleted",
  });
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
