'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserTransaction = sequelize.define('UserTransaction', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    CustomerId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    status:DataTypes.STRING,
    quantity:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      UserTransaction.belongsTo(models.Customer)
      UserTransaction.belongsTo(models.Item)
      }
    }
  });
  return UserTransaction;
};
