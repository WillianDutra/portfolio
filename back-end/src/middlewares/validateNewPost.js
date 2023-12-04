module.exports = (req, res, next) => {
    const { title, shortDescription, content, userId, categoriesIds } = req.body;
    if (!title || title.length < 3) {
        return res.status(400).json({ message: "Title length must be at least 3 characters long" });
    }

    if (!shortDescription) {
        return res.status(400).json({ message: "Short description is required" });
    }

    if (!content) {
        return res.status(400).json({ message: "Content is required" });
    }

    if (!userId) {
        return res.status(400).json({ message: "User id is required" });
    }

    if (!categoriesIds || categoriesIds.length < 1) {
        return res.status(400).json({ message: "Categories is required" });
    }

    next();
};
