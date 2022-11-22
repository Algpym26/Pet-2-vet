const Dog = require('./Dog')
const Cat = require('./Cat')
const Owner = require('./Owner')

// Owner has many Dog
// Owner has many Cat
// Dog belongsTo Owner
// Cat belongsTo Owner

Owner.hasMany(Dog, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'
})

Owner.hasMany(Cat, {
    foreignKey: 'pet_id',
    onDelete: 'CASCADE'

})

Dog.belongsTo(Owner, {
    foreignKey: 'pet_id'
})

Cat.belongsTo(Owner, {
    foreignKey: 'pet_id'
})

module.exports = { Dog, Cat, Owner };
