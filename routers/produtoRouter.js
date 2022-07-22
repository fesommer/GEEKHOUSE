const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/produto", produtoController.index)

module.exports = router;