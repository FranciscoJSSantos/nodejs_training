const express = require("express");
const exphbs = require("express-handlebars");
const { restart } = require("nodemon");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static('public'))

app.get("/dashboard", (req, res) => {
  const items = ["Item A", "Item B", "Item C"];

  res.render("dashboard", { items: items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "aprender node.js",
    category: "Javascript",
    body: "este artigo vai te ajudar a aprender node.js",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "aprender node.js",
      category: "Javascript",
      body: "este artigo vai te ajudar a aprender node.js",
      comments: 4,
    },
    {
      title: "aprender php",
      category: "PHP",
      body: "este artigo vai te ajudar a aprender php",
      comments: 5,
    },
  ];

  res.render('blog', { posts })
});

app.get("/", (req, res) => {
  const user = {
    name: "chico",
    surname: "santana",
  };

  const auth = true;

  const approved = false;

  res.render("home", { user: user, auth, approved });
});

app.listen(3000, () => {
  console.log("app funcionando!");
});
