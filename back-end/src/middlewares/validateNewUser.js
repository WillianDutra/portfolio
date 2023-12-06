module.exports = (req, res, next) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields must be filled" });
    }

    const validateEmail = (email) => {
      const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{3}$/g;
      return regex.test(email);
    };

    if (!validateEmail(email) || password.length < 8) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    next();
  };