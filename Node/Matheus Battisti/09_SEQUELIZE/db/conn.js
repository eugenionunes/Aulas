const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node', 'sa', '123456', {
  host: 'localhost',
  dialect: 'mssql'
})

// try {
//   sequelize.authenticate()
//   console.log('Conexão Realizada com Sucesso')
// } 
// catch(err) {
//   console.log('Não foi possivel Conectar', error)
// }

module.exports = sequelize