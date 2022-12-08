const sequelize = require('../config/connection');
const seedMonitor = require('./monitorData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMonitor();

  process.exit(0);
};

seedAll();
