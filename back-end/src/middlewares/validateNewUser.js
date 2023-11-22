module.exports = (req, res, next) => {
    const { username, password } = req.body;
    if (username.length < 8) {
      return res
        .status(400).json({ message: "Username length must be at least 8 characters long" });
    }
  
    if (password.length < 6) {
      return res
        .status(400).json({ message: "Password length must be at least 6 characters long" });
    }
  
    next();
  };