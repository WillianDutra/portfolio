const { ImageService } = require('../services');

const createImage = async (req, res) => {
    try {
        const { postId, imageDescription } = req.body;
        const imagePath = `localhost:3001/images/${req.file.filename}`;
        const imageCreated = await ImageService.createImage({ postId, imageDescription, imagePath });

        return res.status(201).json(imageCreated);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
};

const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        await ImageService.deleteImage(id);

        return res.status(204).end();
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
};

module.exports = { createImage, deleteImage };
