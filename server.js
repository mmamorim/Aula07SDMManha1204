
import config from "config"
import express from "express"

// iniciando o express
const app = express();
app.use(express.urlencoded({ extended: true }));


// configurando as rotas
import bandasRoute from "./routes/bandas.js"
bandasRoute(app,config);

import pessoasRoute from "./routes/pessoas.js"
pessoasRoute(app,config);

// iniciando o servidor
let port = config.get("server.port");
app.listen(port,function() {
    console.log("Servidor iniciado e escutando na porta "+port);
});

