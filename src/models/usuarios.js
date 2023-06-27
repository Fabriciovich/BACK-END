const { sequelize, DataTypes } = require('../database/db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING

    }
})
console.log(User === sequelize.models.User)

module.exports = User;








