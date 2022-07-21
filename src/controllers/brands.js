import { BrandsAPI } from "../api";

const getAllBrands = async (req, res) => {
  const brands = await BrandsAPI.find();
  res.json(brands);
};

const getBrandById = async (req, res) => {
  const { id } = req.params;
  const brand = await BrandsAPI.find(id);

  if (!brand) return res.status(404).json({ msg: "Marca no encontrada" });

  res.json({
    data: brand,
  });
};

const createBrand = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "Falta nombre " });

  const newVarietal = {
    name,
  };

  const brand = await BrandsAPI.create(newVarietal);

  res.json({
    msg: "Marca creada con exito",
    data: brand,
  });
};

const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "Falta nombre " });

  const newData = {
    name,
  };

  const brandUpdated = await BrandsAPI.update(id, newData);

  res.json({
    msg: "Marca Actualizada",
    data: brandUpdated,
  });
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;

  const brand = await BrandsAPI.find(id);

  if (!brand) return res.status(404).json({ msg: "Marca no encontrada" });

  await BrandsAPI.remove(id);

  res.json({
    msg: "Marca Borrada con exito",
  });
};

export default {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
};
