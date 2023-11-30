const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome?",
    },
    {
      name: "idade",
      message: "Qual sua idade?",
    },
  ])
  .then((answers) => {
   if(!answers.name || !answers.idade){
      throw new Error('PREENCHA OS DADOS!')
   }

    console.log(chalk.bgYellow.black("Dados inseridos com sucesso!"));
  })
  .catch((err) => console.log(chalk.bgRed.white(`Erro: ${err}`)));
