// Declarando o DataTypes Para Informar Qual o Tipo de Dados das Colunas
const {DataTypes} = require('sequelize')

// Criando uma Constante para Informar o Caminho de Configuração do Banco de Dados
const db = require('../db/conn')

// Criação da Tabela Task, com as colunas title, description e done
const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    required: true
  },

  description: {
    type: DataTypes.STRING,
    required: true
  },

  done: {
    type: DataTypes.BOOLEAN,
    required: true
  }
})

// Exportando a Classe Task 
module.exports = Task