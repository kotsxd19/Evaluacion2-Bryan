import express from "express";
import registrarPacienteController from "../Controller/registrerPacientesController.js";
import upload from "../Utils/cloudinaryConfig.js"

const router = express.Router();

router.route("/")
.post(upload.single("profilePhoto"), registrarPacienteController.registrar)

router.route("/verifyCodeEmail")
.post(registrarPacienteController.verifyCode)

export default router
