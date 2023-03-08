const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Cristian Mello',
          email: 'cristianmel2002@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Tatiana Dias',
          email: 'tatianad2002@gmail.com',
          password_hash: await bcryptjs.hash('23456789', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Carolina dos Santos',
          email: 'carolinasan2002@gmail.com',
          password_hash: await bcryptjs.hash('87654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
