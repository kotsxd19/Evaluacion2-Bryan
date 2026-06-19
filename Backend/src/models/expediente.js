import mongoose, { Schema,model } from "mongoose";

const expedienteSchema = new Schema({
    patient_id: {type: mongoose.Schema.Types.ObjectId, ref: "paciente"},
    diagnosis: {type: String},
    medications: [{MedicineName: {Type: String}}],
    MedicalNotes: {type: String}

}
)

export default model("Expediente", expedienteSchema)
