import express from "express";
import registrarPacienteController from "../Controller/registrerPacientesController.js";

const router = express.Router();

router.route("/")
.post(registrarPacienteController.registrar)

router.route("/verifyCodeEmail")
.post(registrarPacienteController.verifyCode)

export default router
