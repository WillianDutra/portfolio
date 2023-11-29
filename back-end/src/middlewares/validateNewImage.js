module.exports = (req, res, next) => {
    const { postId, imageName, imagePath } = req.body;
    if (!postId) {
        return res
        .status(400).json({ message: "PostId is required" });
    }

    if (!imageName) {
        return res
        .status(400).json({ message: "ImageName is required" });
    }

    if (!imagePath) {
        return res
        .status(400).json({ message: "ImagePath is required" });
    }

    next();
};
