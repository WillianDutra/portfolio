module.exports = (req, res, next) => {
    const { title, shortDescription, content, userId, categoriesIds } = req.body;

    if (!title || !shortDescription || !content || !userId || !categoriesIds) {
        return res.status(400).json({ message: "All fields must be filled" });
    }

    if (categoriesIds.length < 1) {
        return res.status(400).json({ message: "At least 1 category is required" });
    }

    next();
};
