import express from "express";
import pacientesController from "../Controller/pacientesController.js";

const router = express.Router();

router.route("/")
.get(pacientesController.getpacientes)

router.route("/:id")
.put(pacientesController.updatePacientes)
.delete(pacientesController.deletePacientes)

export default router