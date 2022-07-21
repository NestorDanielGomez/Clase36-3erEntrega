import { CategoryAPI } from "../api";

const getAllCategories = async (req, res) => {
  const categories = await CategoryAPI.find();
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await CategoryAPI.find(id);

  if (!category)
    return res.status(404).json({ msg: "No se encontro la categoria" });

  res.json({
    data: category,
  });
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "Falta nombre " });

  const newCategory = {
    name,
  };

  const category = await CategoryAPI.create(newCategory);

  res.json({
    msg: "Categoria creada",
    data: category,
  });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "Falta nombre " });

  const newData = {
    name,
  };

  const categoryUpdated = await CategoryAPI.update(id, newData);

  res.json({
    msg: "categoria actualizada con exito",
    data: categoryUpdated,
  });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const category = await CategoryAPI.find(id);

  if (!category)
    return res.status(404).json({ msg: "Categoria no encontrada" });

  await CategoryAPI.remove(id);

  res.json({
    msg: "Categoria eliminada",
  });
};

export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
