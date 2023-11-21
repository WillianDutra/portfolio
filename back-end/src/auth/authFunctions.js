const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const tokenConfig = {algorithm: 'HS256', expiresIn: '1d'};

const createToken = (payload) => jwt.sign(payload, secret, tokenConfig);
const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };
