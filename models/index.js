const User = require('./User');
const Post = require('./post');

// associations 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignkey: 'user_id',
});
module.exports = { User, Post };