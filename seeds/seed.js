const sequelize = require("../config/connection");
const { Cat, Dog, Owner } = require("../models");

const catData = require("./catData.json");
const dogData = require("./dogData.json");
const ownerData = require("./ownerData.json");

const seedDatabase = async () => {
  try{
  await sequelize.sync({ force: true });

  await Owner.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  await Dog.bulkCreate(dogData)

  await Cat.bulkCreate(catData)
  
} catch (err) {
  console.log(err);
}
  

  process.exit(0);
};

seedDatabase();
// const owners = await Owner.bulkCreate(ownerData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // for (const cat of catData) {
  //   await Cat.create({
  //     ...cat,
  //     user_id: owners[Math.floor(Math.random() * owners.length)].id,
  //   });
  // }