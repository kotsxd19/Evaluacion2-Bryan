import mongoose, { Schema,model } from "mongoose";

const citasSchema = new Schema({
    patient_id: {type: mongoose.Schema.Types.ObjectId, ref: "paciente"},
    especiality_id: {type: mongoose.Schema.Types.ObjectId, ref: "especialidad"},
    appoimentDate: {type: Date},
    reason: {type: String},
    status: {type: String},
    observactions: {type: String}

}
)

export default model("Citas", citasSchema)
