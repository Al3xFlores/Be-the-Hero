const express = require('express'); //Importando o express
const cors = require('cors')
const routes = require('./routes')

const app = express(); //variavel que instancia a acplicação 

app.use(cors());
app.use(express.json());
app.use(routes);
/*
//GET: Buscar um informação no Back-end
//POST: Criar uma informação no Back-end
//PUT: Alterar uma informação no Back-end

*/

/*
Tipos de parametros 

Query params: Parametros nomeados enviados na rota após "?" (filtro, paginacão)
Route params: Parâmetros utilizados para indentificar recursos 
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 

*/



app.listen(3333);