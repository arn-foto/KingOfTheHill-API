import mongoose from "mongoose";

//import from mongoose
const {Schema, model} =   mongoose;

const characterSchema = new Schema({
    firstName: String,
    lastName:String,
    age: Number,
    city: String,
    state: String,
    occupation: String
})