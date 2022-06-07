const fs = require('fs')
const arquivo = 'arquivo.txt'
const arquivo_novo = 'arquivo_novo.txt'

fs.rename(arquivo, arquivo_novo, function(err) {
  if(err) {
    console.log(err)
    return
  }

  console.log(`O Arquivo ${arquivo} foi renomeado para ${arquivo_novo}`)
})