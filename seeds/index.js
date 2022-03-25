const seedCategories = require('./category-seeds');
const seedWorkouts = require('./workout-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedWorkouts();
  console.log('\n----- WORKOUTS SEEDED -----\n');

  process.exit(0);
};

module.exports = seedAll;