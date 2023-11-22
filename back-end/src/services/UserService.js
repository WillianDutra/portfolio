const { User } = require('../models');

const checkUserExists = (username) => User.findOne(
    { where: { username } },
    { attributes: { exclude: ['password'] } }
);

const getUserById = (id) => User.findByPk(id);
const getAllUsers = () => User.findAll({attributes: { exclude: ['password'] }});
const createUser = ({username, password, role}) => User.create({ username, password, role });
const deleteUser = (id) => User.destroy({ where: { id } });

module.exports = {
    checkUserExists,
    getUserById,
    getAllUsers,
    createUser,
    deleteUser
};
