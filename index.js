import mongoose from "mongoose";
import Character from "./model/Character.js";
import * as dotenv from "dotenv";
dotenv.config();

const CONNECTION = process.env.CONNECTION;

mongoose.connect(CONNECTION);

const newChar = await Character.create({
  url: "https://github.com/arn-foto/KingOfTheHill-API/blob/Anthony/img/character/Hank-Hill-01.png?raw=true",
  firstName: "Hank",
  lastName: "Hill",
  age: 45,
  gender: "Male",
  city: "Arlen",
  state: "Texas",
  occupation: "Strickland Propane - Asisntant manager.",
});

console.log(newChar);
