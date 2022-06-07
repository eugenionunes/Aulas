// Modulos Externos
const chalk = require('chalk')
const inquirer = require('inquirer')

// Modulos Internos
const fs = require('fs')

operation()

function operation() {
  inquirer.prompt([
    {
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: [
      'Criar Conta',
      'Consultar Saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }])
  .then((answer) => {
    const action = answer['action']

    if(action === 'Criar Conta'){
      createAccount()
    }
    else if (action === 'Consultar Saldo'){
      getAccountBalance()
    }
    else if (action === 'Depositar'){
      deposit()
    }
    else if (action === 'Sacar'){
      withdraw()
    }
    else if (action === 'Sair'){
      console.log(chalk.bgBlue.black('Obrigado Por usar o Accounts!!!'))
      process.exit()
    }

  })
  .catch((err) => console.log(err))
}

// Create an Account
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns Por Escolher Nosso Banco'))
  console.log(chalk.green('Defina as Opções da Sua Conta a Seguir'))

  buildAccount()
}

function buildAccount(){
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Digite Um Nome Para Sua Conta'
    }
  ])
  .then((answer) => {
    const accountName = answer['accountName']
    console.info(accountName)

    if(!fs.existsSync('accounts')){
      fs.mkdirSync('accounts')
    }

    if(fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Esta Conta já Existe, Escolha Outro Nome'))

      buildAccount()
      return
    }

    fs.writeFileSync(`accounts/${accountName}.json`, 
    '{"balance": 0}',
    function(err) {
      console.log(err)
    },
    )
    console.log(chalk.green('Parabéns, a sua conta foi criada'))
    operation()

  })
  .catch((err) => console.log(err))
}

// Deposit
function deposit(){
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome de sua conta?'
    }
    
  ])
  .then((answer) => {
    const accountName = answer['accountName']

    // Verificar se a Conta Existe
    if(!checkAccount(accountName)) {
      return deposit()
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Quanto Você Quer Depositar?'
      },
    ])
    .then((answer) => {
      const amount = answer['amount']

      // Adicionar o Valor
      addAmount(accountName, amount)
      operation()


    }).
    catch((err) => console.log(err))

  })
  .catch((err) => console.log(err))
}


// Função Para Verificar se a Conta Existe
function checkAccount(accountName){

  if(!fs.existsSync(`accounts/${accountName}.json`)){
    console.log(chalk.bgRed.black('Esta Conta Não Existe, Digite a Conta Correta'))
    return false
  }

  return true

}

function addAmount(accountName, amount) {

  const accountData = getAccount(accountName)

  if(!amount) {
    console.log(chalk.bgRed.black('Ocorreu um Erro, Tente Novamente Mais Tarde'))
    return deposit()
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
  
  fs.writeFileSync(`accounts/${accountName}.json`,
  JSON.stringify(accountData),
  function (err){
    console.log(err)
  })
  console.log(chalk.green(`Foi depositado o valor de ${amount} na sua conta`))

}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf-8',
    flag: 'r'
  })
  return JSON.parse(accountJSON)
}

function getAccountBalance() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: ('Qual o Nome de Sua Conta?')
    }
  ])
  .then((answer) => {
    const accountName = answer["accountName"]

    // Verificar se a Conta Existe
    if(!checkAccount(accountName)) {
      return getAccountBalance()
    }

    const accountData = getAccount(accountName)
    console.log(chalk.bgBlue.black(`Olá, O Seu Saldo é de ${accountData.balance}`))
    operation()
  })
  .catch((err) => console.log(err))
}

// Função de Sacar Dinheiro
function withdraw() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o Nome de Sua Conta?'
    }
  ])
  .then((answer) => {
    const accountName = answer['accountName']
    if(!checkAccount(accountName)) {
      return withdraw()
    }

    inquirer.prompt([
      {
        name: 'amount',
        message: 'Quanto Você Deseja Sacar?'
      }
    ])
    .then((answer) => {
      const amount = answer['amount']
      removeAmount(accountName, amount)
    })
    .catch((err) => console.log(err))
  })
  .catch((err) => console.log(err))
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if(!amount) {

    console.log(chalk.bgRed.black('Ocorreu um erro, Tente Novamente Mais Tarde'))
    return withdraw()
  }
  


if(accountData.balance < amount) {
  console.log(chalk.bgRed.black('Valor Indisponivel'))
  withdraw()
}

accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData),
function (err) {
  console.log(err)
})
console.log(chalk.green(`Foi Realizado Um Saque de ${amount} da Sua Conta`))
operation()
}
