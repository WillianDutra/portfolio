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
        const { password: _, ...userWithoutPassword } = user;
        const token = createToken(userWithoutPassword);

        return res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser };
