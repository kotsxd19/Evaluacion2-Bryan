/*
    name,
    lastname,
    password,
    bir
*/

import { Schema,model } from "mongoose";

const pacienteSchema = new Schema({
    name: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    birthDate: {type: Date},
    phone: {type: String},
    addres: {type: String},
    bloodType: {type: String},
    phoneEmergencyConctacts: [{
        phoneEmergency: {type: String},
        nameEmergencyContact: {type: String}
    }],
    profilePhoto: {type: String},
    isVerified: {type: Boolean},
    logingAttempts: {type: Number},
    timeOut: {type: Date}
}
)

export default model("paciente", pacienteSchema)

