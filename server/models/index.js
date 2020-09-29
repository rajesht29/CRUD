const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
let models = {};


models.Crud = sequelize.import('./crud')
models.Crud.sync({});



models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models