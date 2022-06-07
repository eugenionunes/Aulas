// Nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)

const idade = args[1].split('=')[1]

console.log(idade)

// Tem que passar os paramentros quando for rodar o comando
// Exemplo: node ./index.js nome=Eugenio idade=36
// Lembrando que os parametros no comando são nome e idade