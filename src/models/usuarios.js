const { Sequelize, DataTypes } = require('../database/db');

const User = sequelize.define('User', {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
    
});
  
  console.log(User === sequelize.models.User); 







