const sequelize = require('../config/connection');
const seedMonitor = require('./monitorData');

const seedPrebuiltPC= require('./preBuildPCData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMonitor();
  
  await seedPrebuiltPC();
  process.exit(0);
};

seedAll();
