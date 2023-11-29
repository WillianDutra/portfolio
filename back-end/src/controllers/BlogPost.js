const { BlogPostService } = require('../services');

const getPosts = async (_req, res) => {
    try {
        const posts = await BlogPostService.getPosts();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await BlogPostService.getPostById(id);

        return res.status(200).json(post);
    } catch (error) {
        return res.status(statusCode || 500).json({ message: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, shortDescription, content, userId, categoriesIds } = req.body;
        const newPost = await BlogPostService
            .createPost({ title, shortDescription, content, userId, categoriesIds });

        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await BlogPostService.deletePost(id);

        return res.status(204).end();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { getPosts, getPostById, createPost, deletePost };
