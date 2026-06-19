import express from "express";
import equiposMedicosController from "../Controller/equiposController.js";
import upload from "../Utils/cloudinaryConfig.js"

const router = express.Router();

router.route("/")
.get(equiposMedicosController.getEquipos)
.post(upload.single("image"), equiposMedicosController.postEquipos)

router.route("/:id")
.put(equiposMedicosController.updateEquipos)
.delete(equiposMedicosController.deleteEquipos)

export default router











