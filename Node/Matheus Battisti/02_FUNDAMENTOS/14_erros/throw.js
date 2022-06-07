const x = 10

// Checar se X é um número
if(!Number.isInteger(x)){
  throw new Error('O Valor de X não é um Número Inteiro!')
}

console.log(`Continuando o Código...`)
