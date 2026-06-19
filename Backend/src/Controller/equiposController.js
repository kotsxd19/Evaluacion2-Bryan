import equiposMedicos from "../models/equiposMedicos.js"

const equiposMedicosController = {}


//GET
equiposMedicosController.getEquipos = async (req, res) => {
    const equipos = await equiposMedicos.find();
    res.json(equipos)
}

//INSERT
equiposMedicosController.postEquipos = async (req, res) => {
    const {
    equipmentName,
    description,
    brand,
    model,
    purchaseDate,
    maintenanceDate,
    condition,
    image,
    status,
    isAvailable,
        } = req.body

    const newEquiposMedicos = new equiposMedicos({
        equipmentName,
    description,
    brand,
    model,
    purchaseDate,
    maintenanceDate,
    condition,
    image,
    status,
    isAvailable,
    })

    await newEquiposMedicos.save();

    res.json({message: "equipos Medicos guardados"})
}

//DELETE
equiposMedicosController.deleteEquipos= async (req, res) => {
    await equiposMedicos.findByIdAndDelete(req.params.id);
    res.json({message: "equipos Medicos eliminadas"})
}

//UPDATE
equiposMedicosController.updateEquipos = async (req, res) => {
    const {equipmentName,
    description,
    brand,
    model,
    purchaseDate,
    maintenanceDate,
    condition,
    image,
    status,
    isAvailable,
        } = req.body

        await equiposMedicos.findByIdAndUpdate(req.params.id,{equipmentName,
    description,
    brand,
    model,
    purchaseDate,
    maintenanceDate,
    condition,
    image,
    status,
    isAvailable,},{new: true})
            res.json({message: "equipos Medicos actualizadas"})
}

export default equiposMedicosController;