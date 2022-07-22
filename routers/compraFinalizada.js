const express = require("express");
const router = express.Router();
const compraFinalizadaController = require("../controllers/compraFinalizadaController");

router.get("/comprafinalizada", compraFinalizadaController.index)

module.exports = router;