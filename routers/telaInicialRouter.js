const express = require("express");
const router = express.Router();
const telaInicial = require("../controllers/telaInicialController")


router.get("/", telaInicial.index);


module.exports = router