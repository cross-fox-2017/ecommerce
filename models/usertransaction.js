'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserTransaction = sequelize.define('UserTransaction', {
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
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
