import citas from "../models/citasMedicas.js"

const citasMedicasController = {}


//GET
citasMedicasController.getCitas = async (req, res) => {
    const cita = await citas.find();
    res.json(cita)
}

//INSERT
citasMedicasController.postCitas = async (req, res) => {
    const {
            patient_id,
            especiality_id,
            appoimentDate,
            reason,
            status,
            observactions
        } = req.body

    const newCitas = new citas({
        patient_id,
            especiality_id,
            appoimentDate,
            reason,
            status,
            observactions
    })

    await newCitas.save();

    res.json({message: "citas guardados"})
}

//DELETE
citasMedicasController.deleteCitas = async (req, res) => {
    await citas.findByIdAndDelete(req.params.id);
    res.json({message: "citas eliminadas"})
}

//UPDATE
citasMedicasController.updateCitas = async (req, res) => {
    const {patient_id,
            especiality_id,
            appoimentDate,
            reason,
            status,
            observactions,
        } = req.body

        await citas.findByIdAndUpdate(req.params.id,{patient_id,
            especiality_id,
            appoimentDate,
            reason,
            status,
            observactions},{new: true})
            res.json({message: "citas actualizadas"})
}

export default citasMedicasController;