import express from "express";
import citasController from "../Controller/citasController.js";

const router = express.Router();

router.route("/")
.get(citasController.getCitas)
.post(citasController.postCitas)

router.route("/:id")
.put(citasController.updateCitas)
.delete(citasController.deleteCitas)

export default router
