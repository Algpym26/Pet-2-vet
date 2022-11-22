const sequelize = require('../config/connection');
const { Cat, Dog, Owner } = require('../models');

const catData = require('./catData.json');
const dogData = require('./dogData.json');
const ownerData = require('./ownerData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const owners = await Owner.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  for (const cat of catData) {
    await Cat.create({
      ...cat,
      pet_id: owners[Math.floor(Math.random() * owners.length)].id,
    });
  }

  for (const dog of dogData) {
    await Dog.create({
      ...dog,
      pet_id: owners[Math.floor(Math.random() * owners.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();