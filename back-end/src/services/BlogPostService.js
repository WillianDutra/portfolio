const { BlogPost, User, Category, PostCategory } = require('../models');
const BadRequest = require('../errors/BadRequest');

const getPosts = () => {
    return BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
}

const getPostById = (id) => {
    const post = BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });

    if (!post) throw new BadRequest('Post does not exist');
    return post;
}

const createPostCategory = ({ postId, categoryId }) => {
    return PostCategory.create({ postId, categoryId });
}

const createPost = async ({ title, shortDescription, content, userId, categoriesIds }) => {
    const { dataValues } = await BlogPost.create({ title, shortDescription, content, userId });
    
    categoriesIds.forEach((categoryId) => {
        createPostCategory({ postId: dataValues.id, categoryId });
    });

    return { ...dataValues };
};

const deletePost = (id) => BlogPost.destroy({ where: { id } });

module.exports = { getPosts, getPostById, createPost, deletePost };
