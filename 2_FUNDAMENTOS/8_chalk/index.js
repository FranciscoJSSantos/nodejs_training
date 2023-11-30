const chalk = require('chalk')

const nota = 5

if(nota>= 7){
   console.log(chalk.bgGreen.white('Parabéns!'))
} else {
   console.log(chalk.bgRed.black('Recuperação!'))
}

