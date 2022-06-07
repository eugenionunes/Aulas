const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Qual a sua Linguagem Preferida?", (language) => {

  console.log(`A Minha Linguagem Favorita é: ${language}`)
  readline.close()
})