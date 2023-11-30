// lodash está instalado global por isso precisamos 
// usar o npm link lodash para linkar o package no nosso diretorio

const _ = require('lodash')

const arr = [1,2,2,3,3,4,4,5]

console.log(_.sortedUniq(arr))