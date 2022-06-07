// Declarando a Biblioteca Sequelize
const { Sequelize } = require('sequelize')

// Criando a Configuração do Banco de Dados Node2
const sequelize = new Sequelize('node2', 'sa', '123456', {
  host: 'localhost',
  dialect: 'mssql'
})

// Verificando Se a Conexão Deu Certo
try {

  sequelize.authenticate()
  console.log('Conectamos no Banco de Dados')  

} 
catch (error) {
  console.log(`Não foi possível conectar no Banco de Dados ${error}`)
}

// Exportando a Classe Sequelize
module.exports = sequelize