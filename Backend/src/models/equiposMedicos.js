import mongoose, { Schema,model } from "mongoose";

const equipoSchema = new Schema({
    equipmentName: {type: String},
    description: {type: String},
    brand: {type: String},
    model: {type: String},
    purchaseDate: {type: Date},
    maintenanceDate: {type: Date},
    condition: {type: String},
    image: {type: String},
    status: {type: String},
    isAvailable: {type: Boolean},
}
)

export default model("Equipos", equipoSchema)
