import mongoose from "mongoose";

//import from mongoose
const { Schema, model } = mongoose;

const characterSchema = new Schema({
  url: String,
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  city: String,
  state: String,
  occupation: String,
});

const Character = model("Character", characterSchema);

export default Character;
