import { Schema } from "mongoose";

const eventSchema = new Schema({
  title: { type: String, required: true },
});
