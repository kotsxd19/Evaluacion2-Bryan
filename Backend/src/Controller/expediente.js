import expediente from "../models/expediente.js"

const ExpedienteController = {}


//GET
ExpedienteController.getexpediente = async (req, res) => {
    const expedientes = await expediente.find();
    res.json(expedientes)
}

//INSERT
ExpedienteController.postexpediente = async (req, res) => {
    const {
            patient_id,
            diagnosis,
            medications,
            MedicalNotes
        } = req.body

    const newExpediente = new expediente({
        patient_id,
        diagnosis,
        medications,
        MedicalNotes
    })

    await newExpediente.save();

    res.json({message: "expediente guardados"})
}

//DELETE
ExpedienteController.deleteexpediente = async (req, res) => {
    await expediente.findByIdAndDelete(req.params.id);
    res.json({message: "expediente eliminadas"})
}

//UPDATE
ExpedienteController.updateexpediente = async (req, res) => {
    const {
        patient_id,
            diagnosis,
            medications,
            MedicalNotes
        } = req.body

        await expediente.findByIdAndUpdate(req.params.id,{
            patient_id,
            diagnosis,
            medications,
            MedicalNotes
        },{new: true})
            res.json({message: "expediente actualizadas"})
}

export default ExpedienteController;