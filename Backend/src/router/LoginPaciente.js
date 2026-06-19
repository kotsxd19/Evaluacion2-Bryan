import express from "express";
import loginpacientesController from "../Controller/LoginPacientesController.js";

const router = express.Router();

router.route("/")
.post(loginpacientesController.Login)


export default router