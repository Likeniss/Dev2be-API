const express = require('express');
const routes = express.Router();
const usuario = require('./controllers/usersControllers.js');
const login = require('./controllers/login.js');
const sectionUsersController = require('./controllers/sectionUsersControllers.js');
const usersControllers = require('./controllers/usersControllers.js');
/*
    Método GET: Busca informação no back-end
    Método POST: Cria uma informação no back-end
    Método PUT: Alterar informação no back-end
    Método DELETE: Deletar informação do back-end
    */

routes.get('/usuarios/',usersControllers.index);
routes.get('/usuarios/:id',usersControllers.index);
routes.post('/login', sectionUsersController.create);
routes.post('/cadastro', usersControllers.create);
routes.delete('/usuarios/:id', usersControllers.index);
routes.put('/usuarios/:id', usersControllers.update);
module.exports = routes;