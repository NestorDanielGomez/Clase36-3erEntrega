import { VarietalAPI } from "../api";

const getAllVarietals = async (req, res) => {
  const varietals = await VarietalAPI.find();
  res.json(varietals);
};

const getVarietalById = async (req, res) => {
  const { id } = req.params;
  const varietal = await VarietalAPI.find(id);

  if (!varietal) return res.status(404).json({ msg: "Varietal no encontrado" });

  res.json({
    data: varietal,
  });
};

const createVarietal = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "Falta nombre " });

  const newVarietal = {
    name,
  };

  const varietal = await VarietalAPI.create(newVarietal);

  res.json({
    msg: "Varietal creado",
    data: varietal,
  });
};

const updateVarietal = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "Falta nombre " });

  const newData = {
    name,
  };

  const varietalUpdated = await VarietalAPI.update(id, newData);

  res.json({
    msg: "Varietal Actualizado",
    data: varietalUpdated,
  });
};

const deleteVarietal = async (req, res) => {
  const { id } = req.params;

  const varietal = await VarietalAPI.find(id);
  console.log("varietal", varietal);

  if (!varietal) return res.status(404).json({ msg: "Varietal no encontrado" });

  await VarietalAPI.remove(id);

  res.json({
    msg: "Varietal Borrado con exito",
  });
};

export default {
  getAllVarietals,
  getVarietalById,
  createVarietal,
  updateVarietal,
  deleteVarietal,
};
