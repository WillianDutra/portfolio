const { UserService } = require('../services');

const createUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const userCreated = await UserService.createUser({ email, password, name });
        return res.status(201).json(userCreated);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
};

const deleteUser = (req, res) => {
    try {
        const { id } = req.data;
        UserService.deleteUser(id);

        return res.status(204).end();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser, deleteUser };
