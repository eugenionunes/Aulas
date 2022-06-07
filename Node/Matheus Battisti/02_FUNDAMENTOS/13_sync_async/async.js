// Assincrono
const fs = require("fs")

console.log("Inicio")

fs.writeFile("arquivo2.txt", "oi Assicrono", function(err) {
  setTimeout(function() {
    console.log("Arquivo Criado");
  }, 1000)
})

console.log('Fim')