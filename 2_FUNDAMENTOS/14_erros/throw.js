const x = '10'

//checar se x é um numero

if(!Number.isInteger(x)){
   throw new Error('valor nao é interiro')
}

console.log('continuando o codigo...')