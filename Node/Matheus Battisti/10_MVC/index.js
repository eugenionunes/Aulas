// Chamando e Configurando o Express
const express = require('express')
const app = express()

// Informando onde estão as configurações do Banco de Dados
const conn = require('./db/conn')

// Informando as tabelas do Banco de Dados que serão usadas
const Task = require('./models/Task')

// Informando as Rotas
// Rotas Tasks

const tasksRoutes = require('./routes/tasksRoutes')

// Configurando o Handlebars (View Engine)
const hbs = require('express-handlebars')
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true
  })
)

// Configurando para poder utilizar o Json
app.use(express.json())

// Informando onde ficam os arquivos de Estilos
app.use(express.static('public'))

// Informando onde ficam os arquivos de Rotas do Task
app.use('/tasks', tasksRoutes)

// Informando a Porta que o App irá utilizar
conn.sync()
    .then(() => { app.listen(3000) })
    .catch((err) => console.log(err))
