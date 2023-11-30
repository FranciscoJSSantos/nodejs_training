const path = require('path');


//caminho absoluto do arquivo
console.log(path.resolve('teste.txt'))

//formacao de path

const midFolder = 'relatorios'
const filename = 'teste2.txt'

const finalPath = `/arquivos/${midFolder}/${filename}`

console.log(finalPath)