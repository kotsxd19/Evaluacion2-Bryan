import express from "express";
import expedienteController from "../Controller/expediente.js";

const router = express.Router();

router.route("/")
.get(expedienteController.getexpediente)
.post(expedienteController.postexpediente)

router.route("/:id")
.put(expedienteController.updateexpediente)
.delete(expedienteController.deleteexpediente)

export default router