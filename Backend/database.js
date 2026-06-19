import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Rosales")

const connection = mongoose.connection

connection.once("open", () => {
    console.log("DB is conected")
})

connection.on("disconected", () =>{
    console.log("DB is desiconected")
})

connection.on("error", (error) =>{
    console.log("error found" + error)
})





