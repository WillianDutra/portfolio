const md5 = require('md5');
const { createToken } = require('../auth/authFunctions');
const Conflict = require('../utils/ErrorStatus/Conflict');
const { User } = require('../models');

const checkUserExists = async (username) => User.findOne(
    { where: { username } },
    { attributes: { exclude: ['password'] } }
);

const createUser = async ({ username, password }) => {
    const userExists = await checkUserExists(username);
    if (userExists) throw new Conflict('User already exists');
    
    const { dataValues } = await User.create({ username, password: md5(password), role: "user" });

    const userWithoutPassword = {
        id: dataValues.id,
        username: dataValues.username,
        role: dataValues.role,
    };

    const token = createToken(userWithoutPassword);
    return { ...userWithoutPassword, token };
};

const getUserByNameAndPassword = ({username, password}) => {
    return User.findOne({ where: { username, password: md5(password)} });
};

const deleteUser = (id) => User.destroy({ where: { id } });
const getUserById = (id) => User.findByPk(id);
const getAllUsers = () => User.findAll({attributes: { exclude: ['password'] }});

module.exports = {
    checkUserExists,
    getUserByNameAndPassword,
    getUserById,
    getAllUsers,
    createUser,
    deleteUser
};
