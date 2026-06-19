/*import nodemailer from "nodemailer"
import crypto from "crypto"
import jsonerbtoken from "jsonwebtoekn"
import bcryptjs from "bcryptjs"*/

import especialidadesMedicas from "../models/especialidadesMedicas.js"

const especialidadesController = {}


//GET
especialidadesController.getEspecialidades = async (req, res) => {
    const especialidades = await especialidadesMedicas.find();
    res.json(especialidades)
}

//INSERT
especialidadesController.postEspecialidad = async (req, res) => {
    const {
            specialityName,
            description,
            isAvailable
        } = req.body

    const newEspecialidades= new especialidadesMedicas({
        specialityName,
            description,
            isAvailable
    })

    await newEspecialidades.save();

    res.json({message: "especialidades guardados"})
}

//DELETE
especialidadesController.deleteEspecialidades = async (req, res) => {
    await especialidadesMedicas.findByIdAndDelete(req.params.id);
    res.json({message: "Especialidades eliminadas"})
}

//UPDATE
especialidadesController.updateEspecialidades = async (req, res) => {
    const {specialityName,
            description,
            isAvailable
        } = req.body

        await especialidadesMedicas.findByIdAndUpdate(req.params.id,{specialityName,
            description,
            isAvailable},{new: true})
            res.json({message: "especialidades actualizadas"})
}

export default especialidadesController;