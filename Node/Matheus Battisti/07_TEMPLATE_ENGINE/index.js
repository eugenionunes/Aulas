const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
  const items = ["Items A", "Items B", "Items C"]

  res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender NodeJS',
    category: 'Javascript',
    nody: 'Este Artigo vai te ajudar a aprender NodeJS',
    comments: 4
  }

  res.render('blogspot', { post })
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Javascript",
      body: "Esse Artigo vai te ensinar a aprender Node.js",
      comments: 4
    },

    {
      title: "Aprender Python",
      category: "Python",
      body: "Esse Artigo vai te ensinar a aprender Node.js",
      comments: 4
    },

    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Esse Artigo vai te ensinar a aprender Node.js",
      comments: 4
    },
  ]

  res.render('blog', { posts })
})

app.get('/', (req, res) => {
  const user = {
    name: 'Eugenio',
    surname: 'Nunes',
    age: 36
  }

  const palavra = 'Teste'

  const auth = true 

  const approved = false

  res.render('home', { user: user,palavra, auth, approved })
})

app.listen(3000, () => {
  console.log("App Funcionando")
})