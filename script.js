const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

async function script(){await mongoose.connect("mongodb://localhost/", ()=> {console.log("connected...")}, e=> console.log(e)) }

