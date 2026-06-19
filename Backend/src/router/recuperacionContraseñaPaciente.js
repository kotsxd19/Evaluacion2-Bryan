import express from "express";

import recuperarContraseña from "../Controller/RecuperacionContraseñaPacienteController.js";

const router = express.Router();

router.route("/requestCode").post(recuperarContraseña.requestCode);
router.route("/verifyCode").post(recuperarContraseña.verifyCode);
router.route("/newPassword").post(recuperarContraseña.newPassword);

export default router;


