import { BrandsModel } from "../models";
import { ProductsAPI, ApiError, ErrorStatus } from "./index";

const find = (id) => {
  if (id) return BrandsModel.findById(id);

  return BrandsModel.find();
};

const create = (newBrand) => BrandsModel.create(newBrand);

const update = (id, data) =>
  BrandsModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => BrandsModel.findByIdAndDelete(id);
// const remove = async (id) => {
//   const productsWithBrand = await ProductsAPI.findByBrand(id);

//   if (productsWithBrand.length > 0)
//     throw new ApiError(
//       "No se puede borrar esta marca porque esta asociada a productos",
//       ErrorStatus.BadRequest
//     );

//   BrandsModel.findByIdAndDelete(id);
// };

export default {
  find,
  create,
  update,
  remove,
};
