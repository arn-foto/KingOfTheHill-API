const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

async function main(){await mongoose.connect("mongodb://localhost/testDB", ()=> {console.log("connected...")}, e=> console.log(e)) }

