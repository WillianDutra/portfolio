module.exports = (req, res, next) => {
    const { postId, imageDescription } = req.body;
    if (!postId) {
        return res.status(400).json({ message: "PostId is required" });
    }

    if (!imageDescription) {
        return res.status(400).json({ message: "ImageDescription is required" });
    }

    next();
};
