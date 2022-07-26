import mongoose from "mongoose";

export const categoryCollectionName = "categories";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const CategoryModel = mongoose.model(
  categoryCollectionName,
  categorySchema
);
