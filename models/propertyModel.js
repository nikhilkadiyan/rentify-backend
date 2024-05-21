import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  userId: { type: String, require: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  pincode: { type: String, required: true },
  address: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathrooms: { type: String, required: true },
  hospitals: { type: String, required: true },
  colleges: { type: String, required: true },
  schools: { type: String, required: true },
});

const propertyModel =
  mongoose.models.property || mongoose.model("property", propertySchema);
export default propertyModel;
