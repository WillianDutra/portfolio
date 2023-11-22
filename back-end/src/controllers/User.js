const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await UserService.checkUserExists(username);
        if (userExists) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const userCreated = await UserService.createUser({ username, password });
        const user = await UserService.getUserById(userCreated.id);
        const { password: _, ...userWithoutPassword } = user.dataValues;
        const token = createToken(userWithoutPassword);

        return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.data;
        await UserService.deleteUser(id);

        return res.status(204).end();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser, deleteUser };
