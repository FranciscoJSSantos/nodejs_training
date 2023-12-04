const express = require('express');
const path = require('path')
const router = express.Router();

const basePath = path.join(__dirname, '../templates')

router.get('/:id',(req, res) => {
   const id = req.params.id

   //leitura da tabela users, resgatar um usuario
   console.log(`Estamos buscando pela tarefa ${id}`)

   res.sendFile(`${basePath}/tarefa.html`)
})


module.exports = router

