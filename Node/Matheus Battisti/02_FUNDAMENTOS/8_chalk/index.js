const chalk = require('chalk')

const nota = 4

console.log(chalk.red.bold('Parabéns! Você foi Aprovado'))

if (nota >= 7){
  console.log(chalk.bgGreen.black.bold("Parabéns!! Você Passou de Ano!"))
}
else{
  console.log(chalk.bgRed.bold("Você Perdeu de Ano"))
}