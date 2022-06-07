const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))

//Formar Path
const midFolder = "relatorios"
const fileName = "eugenio.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName)

console.log(finalPath)
