const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine','handlebars')

app.get('/dashboard', (req, res) => {

   const items = ["Item A", "Item B", "Item C"]

   res.render('dashboard', { items: items })
})

app.get('/post', (req, res) => {

   const post = {
      title: "aprender node.js",
      category: "Javascript",
      body: "este artigo vai te ajudar a aprender node.js",
      comments: 4
   }

   res.render('blogpost', { post: post})
})

app.get('/', (req, res) => {

   const user  = {
      name: "chico",
      surname: "santana"
   }

   const auth = true

   const approved = false

   res.render('home', {user: user, auth, approved})
})

app.listen(3000, () => {
   console.log('app funcionando!')
})