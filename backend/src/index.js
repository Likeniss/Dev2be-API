const express = require('express');             //Passo o express e passo para uma constante
const app = express();                      //Inicio o express usando a variável app
const routes = require('./routes.js');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(routes);
app.listen(3333);                           //Inicia um servidor
