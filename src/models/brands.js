import mongoose from "mongoose";

export const brandCollectionName = "brands";

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const BrandsModel = mongoose.model(brandCollectionName, brandSchema);
