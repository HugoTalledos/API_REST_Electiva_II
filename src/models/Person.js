import { number } from "joi";
import { Schema, model } from "mongoose";

const PersonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cellphone: {
      type: Number,
      required: false,
    },
    cedula: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Person", PersonSchema);
