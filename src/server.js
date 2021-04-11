const express = require("express")
const server = express()
const routes = require('./routes.js')
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// Mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'))
// __dirname é sempre o diretório em que o script atualmente em execução reside. Então, se você digitou __dirname em /d1/d2/myscript.js, o valor seria /d1/d2.

//habilitar arquivos estaticos
server.use(express.static('public'))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log("rodando"))