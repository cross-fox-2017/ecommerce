'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    picture:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Item.hasMany(models.UserTransaction)
        Item.belongsToMany(models.Customer,{through:'UserTransaction'})
      }
    }
  });
  return Item;
};
