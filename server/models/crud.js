module.exports = function (sequalize, DataTypes) {
    let Crud = sequalize.define('Crud', {
        id: {
            type: DataTypes.INTEGER(11),
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'name',
        },
        email: {
            type: DataTypes.STRING(110),
            field: 'email',
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(110),
            field: 'password',
        },
    },
        {
            timestamps: false,
            tableName: 'Crud'


        })
    return Crud
}