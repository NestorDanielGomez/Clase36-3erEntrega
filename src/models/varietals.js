import mongoose from "mongoose";

export const varietalCollectionName = "varietals";

const varietalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const VarietalModel = mongoose.model(
  varietalCollectionName,
  varietalSchema
);
