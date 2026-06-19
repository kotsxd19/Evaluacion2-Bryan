import express from "express";
import especialidadesController from "../Controller/especialidaesController.js";

const router = express.Router();

router.route("/")
.get(especialidadesController.getEspecialidades)
.post(especialidadesController.postEspecialidad)

router.route("/:id")
.put(especialidadesController.updateEspecialidades)
.delete(especialidadesController.deleteEspecialidades)

export default router











