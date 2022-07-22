const express = require("express");
const app = express();
const telaInicialRouter = require("./routers/telaInicialRouter");
const cadastroRouter = require("./routers/cadastroRouter");
const carrinhoRouter = require("./routers/carrinhoRouter");
const adicionarCartaoRouter = require("./routers/adicionarCartaoRouter");
const compraFinalizadaRouter = require("./routers/compraFinalizada");
const pagamentoRouter = require("./routers/pagamentoRouter");
const produtoRouter = require("./routers/produtoRouter");


//  --- Middlewares ---
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(telaInicialRouter);
app.use(cadastroRouter);
app.use(carrinhoRouter);
app.use(adicionarCartaoRouter);
app.use(compraFinalizadaRouter);
app.use(pagamentoRouter);
app.use(produtoRouter);

app.listen(3000, () => console.log("Estou Funcionando"))