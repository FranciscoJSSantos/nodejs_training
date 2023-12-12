const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/unico", (req, res) => {
   
   res.render("unico");
 });

app.get("/produto1", (req, res) => {

   const unicos = [{
      name: "Brinquedo 1",
      valor: 10,
      descricao: "Novidade!",
      detalhes: "/produto1",
    }]

  res.render("produto1", { unicos});
});

app.get("/produto2", (req, res) => {

   const unicos = [{
      name: "Brinquedo 2",
      valor: 20,
      descricao: "Novidade!",
      detalhes: "/produto2",
    }]
  res.render("produto2", { unicos });
});

app.get("/produto3", (req, res) => {

   const unicos = [{
      name: "Brinquedo 3",
      valor: 30,
      descricao: "Novidade!",
      detalhes: "/produto3",
    }]

  res.render("produto3", { unicos });
});

app.get("/", (req, res) => {
  const produtos = [
    {
      name: "Brinquedo 1",
      valor: 10,
      descricao: "Novidade!",
      detalhes: "/produto1",
    },
    {
      name: "Brinquedo 2",
      valor: 20,
      descricao: "Novidade!",
      detalhes: "/produto2",
    },
    {
      name: "Brinquedo 3",
      valor: 30,
      descricao: "Novidade!",
      detalhes: "/produto3",
    },
  ];

  res.render("produto", { produtos });
});

app.listen(3000, () => {
  console.log("porta funfando hehe");
});
