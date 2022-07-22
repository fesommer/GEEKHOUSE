const express = require("express");
const router = express.Router();
const adicionarCartaoController = require("../controllers/adicionarCartaoController");

router.get("/adicionarcartao", adicionarCartaoController.index)

module.exports = router;