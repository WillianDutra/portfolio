const { Image, Post } = require('../models');
const BadRequest = require("../utils/ErrorStatus/BadRequest");

const getImagesFromPost = (id) => Image.findAll({ where: { postId: id } });

const createImage = ({ postId, imageName, imagePath }) => {
    const postExists = Post.findByPk(postId);
    if (!postExists) throw new BadRequest("Post not found");

    return Image.create({ postId, imageName, imagePath });
};

const deleteImage = (id) => Image.destroy({ where: { id } });

module.exports = { getImagesFromPost, createImage, deleteImage };
