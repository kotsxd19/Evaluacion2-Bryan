/*import nodemailer from "nodemailer"
import crypto from "crypto"
import jsonerbtoken from "jsonwebtoekn"
import bcryptjs from "bcryptjs"*/

import pacientes from "../models/pacientes.js"

const pacientesController = {}


//GET
pacientesController.getpacientes = async (req, res) => {
    const paciente = await pacientes.find();
    res.json(paciente)
}

//DELETE
pacientesController.deletePacientes = async (req, res) => {
    await pacientes.findByIdAndDelete(req.params.id);
    res.json({message: "pacientes eliminadas"})
}

//UPDATE
pacientesController.updatePacientes = async (req, res) => {
    const {
    name,
    lastName,
    email,
    password,
    birthDate,
    phone,
    addres,
    bloodType,
    phoneEmergencyConctacts:   
    {
        phoneEmergency,
        nameEmergencyContact
    },
    profilePhoto,
    isVerified,
    logingAttempts ,
    timeOut
        } = req.body

        await pacientes.findByIdAndUpdate(req.params.id,{name,
    lastName,
    email,
    password,
    birthDate,
    phone,
    addres,
    bloodType,
    phoneEmergencyConctacts:   
    {
        phoneEmergency,
        nameEmergencyContact
    },
    profilePhoto,
    isVerified, 
    logingAttempts,
    timeOut},{new: true})
            res.json({message: "pacientes actualizadas"})
}

export default pacientesController;