import mongoose from "mongoose";
import { categoryCollectionName } from "./categories";
import { varietalCollectionName } from "./varietals";
import { brandCollectionName } from "./brands";

export const productsCollectionName = "products";

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: categoryCollectionName,
      required: true,
    },
    varietalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: varietalCollectionName,
      required: true,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: brandCollectionName,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const ProductModel = mongoose.model(
  productsCollectionName,
  productsSchema
);
