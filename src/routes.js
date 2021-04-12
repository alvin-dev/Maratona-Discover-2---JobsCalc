// 1:57:45

const express = require('express'); // lib para criar o servidor
const routes = express.Router() // funcionalidade do express para criar as rotas
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')

routes.get('/', JobController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)


module.exports = routes;