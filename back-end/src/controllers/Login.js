const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.getUserByNameAndPassword({ email, password });
        if (!user) return res.status(401).json({ message: 'Invalid email or password' });

        const { password: _p, ...userData } = user.dataValues;
        const token = createToken(userData);

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { userLogin };