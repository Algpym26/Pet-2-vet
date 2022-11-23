const Dog = require("./Dog");
const Cat = require("./Cat");
const Owner = require("./Owner");

// Owner has many Dog
// Owner has many Cat
// Dog belongsTo Owner
// Cat belongsTo Owner

Owner.hasMany(Dog, {
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Owner.hasMany(Cat, {
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Dog.belongsTo(Owner, {
  foreignKey: "owner_id",
});

Cat.belongsTo(Owner, {
  foreignKey: "owner_id",
});

module.exports = { Dog, Cat, Owner };
