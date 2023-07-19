import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  zipCode: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Address ||
  mongoose.model("Address", addressSchema);
