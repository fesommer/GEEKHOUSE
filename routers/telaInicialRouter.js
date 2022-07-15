const express = require("express");
const router = express.Router();
const telaInicial = require("../controllers/telaInicialController")


router.get("/inicio", telaInicial.index);


module.exports = router