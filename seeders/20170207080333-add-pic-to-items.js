'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Ayam',
        price: 50000,
        quantity: 10,
        picture: 'http://www.drodd.com/images15/chicken19.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sapi',
        price: 150000,
        quantity: 10,
        picture: 'http://cdn.modernfarmer.com/wp-content/uploads/2014/09/cowhero2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lele',
        price: 10000,
        quantity: 10,
        picture: 'http://budidarma.com/wp-content/uploads/blogger/_mRmnK1pkPsc/TPM5xqoRYZI/AAAAAAAAABQ/huYEJ38fqAA/s1600/lele2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
