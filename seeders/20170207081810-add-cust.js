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
    return queryInterface.bulkInsert('Customers', [
      {
        name: 'Raisa',
        picture: 'http://oketekno.com/hiburan/wp-content/uploads/2016/08/Mandi-Pakai-Air-Galon-Raisa-Dicibir-Berlebihan-Oleh-Netizen-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SaltBae',
        picture: 'http://loopassets.s3.amazonaws.com/salt_bae.jpg',
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
