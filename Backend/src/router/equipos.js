import express from "express";
import equiposMedicosController from "../Controller/equiposController.js";

const router = express.Router();

router.route("/")
.get(equiposMedicosController.getEquipos)
.post(equiposMedicosController.postEquipos)

router.route("/:id")
.put(equiposMedicosController.updateEquipos)
.delete(equiposMedicosController.deleteEquipos)

export default router











