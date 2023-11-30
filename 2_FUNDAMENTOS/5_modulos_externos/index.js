const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const dev = args['dev']

console.log(nome)
console.log(dev)
console.log(`${nome} é ${dev}`)