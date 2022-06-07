const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mssql = require('mssql')
const port = 3000

async () => {
  try {
   await mssql.connect('Server = localhost,1433; Database: node; User Id = sa; Password = 123456')
   console.log('Conexão realizada com o banco de dados')
   console.dir(result)
  } catch (err) {
    console.log(err)
  }
}

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})




app.listen(port, () => {
    console.log(`App Funcionando na porta ${port}`)
  })



