const express = require("express");
const app = express();
const tela = require("./routers/telaInicialRouter");


//  --- Middlewares ---
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(tela);

app.listen(3000, () => console.log("Estou Funcionando"))