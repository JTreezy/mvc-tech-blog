const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog);
Blog.belongsTo(User);

Blog 



module.exports = {
    User,
    Blog
}