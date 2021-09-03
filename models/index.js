const User = require('./User');
const Pallete = require('./Pallete')

User.hasMany(Pallete, {
    foreignKey: 'pallete_id',
    onDelte: 'CASCADE'
});

Pallete.belongsTo(User, {
    foreignKey: 'pallete_id',
});

module.exports = { User, Pallete };