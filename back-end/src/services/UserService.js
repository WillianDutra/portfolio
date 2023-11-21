const { User } = require('../models');

const checkUserExists = (username) => User.findOne(
    { where: { username } },
    { attributes: { exclude: ['password'] } }
);

const getUserByName = (username) => User.findOne(
    { where: { username } }
);

const createUser = ({username, password, role}) => User.create(
    { username, email, password, role }
);

const deleteUser = (id) => User.destroy(
    { where: { id } }
);

module.exports = {
    checkUserExists,
    getUserByName,
    createUser,
    deleteUser
};