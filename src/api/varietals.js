import { VarietalModel } from "../models";
import { ProductsAPI, ApiError, ErrorStatus } from "./index";

const find = (id) => {
  if (id) return VarietalModel.findById(id);

  return VarietalModel.find();
};

const create = (newVarietal) => VarietalModel.create(newVarietal);

const update = (id, data) =>
  VarietalModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => VarietalModel.findByIdAndDelete(id);
// const remove = async (id) => {
//   const productsWithVarietal = await ProductsAPI.findByVarietal(id);
//   if (productsWithVarietal.length > 0)
//     throw new ApiError(
//       "No se puede borrar un Varietal porque hay productos con dicho varietal",
//       ErrorStatus.BadRequest
//     );

//   VarietalModel.findByIdAndDelete(id);
// };

export default {
  find,
  create,
  update,
  remove,
};
