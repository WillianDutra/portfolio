const md5 = require('md5');
const { createToken } = require('../auth/authFunctions');
const Conflict = require('../utils/ErrorStatus/Conflict');
const { User } = require('../models');

const checkUserExists = async (email) => User.findOne(
    { where: { email } },
    { attributes: { exclude: ['password'] } }
);

const createUser = async ({ email, name, password }) => {
    const userExists = await checkUserExists(email);
    if (userExists) throw new Conflict('User already exists');
    
    const { dataValues } = await User.create({ email, name, password: md5(password), role: "user" });

    const userWithoutPassword = {
        id: dataValues.id,
        email: dataValues.email,
        name: dataValues.name,
        role: dataValues.role,
    };

    const token = createToken(userWithoutPassword);
    return { ...userWithoutPassword, token };
};

const getUserByEmailAndPassword = ({email, password}) => {
    return User.findOne({ where: { email, password: md5(password)} });
};

const deleteUser = (id) => User.destroy({ where: { id } });
const getUserById = (id) => User.findByPk(id);
const getAllUsers = () => User.findAll({attributes: { exclude: ['password'] }});

module.exports = {
    checkUserExists,
    getUserByEmailAndPassword,
    getUserById,
    getAllUsers,
    createUser,
    deleteUser
};
