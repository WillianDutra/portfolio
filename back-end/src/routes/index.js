const express = require('express');
const apiRoutes = express.Router();
const { sequelize } = require('../models');
const { User, Category, Image, BlogPost } = require('../controllers');

const {
  validateNewUser,
  validateToken,
  validateNewImage,
  validateNewPost
} = require('../middlewares');

apiRoutes.get('/health', async (_req, res) => {
  try {
    await sequelize.authenticate();
    return res.status(200).json({ message: 'Connection has been established successfully.' });
  } catch (error) {
    return res.status(500).json({ message: `Unable to connect to the database: ${error.message}` });
  }
});

// User
apiRoutes.post('/user', validateNewUser, User.createUser);
apiRoutes.delete('/user/me', validateToken, User.deleteUser);

// Category
apiRoutes.get('/categories', Category.getCategories);
apiRoutes.post('/categories', validateToken, Category.createCategory);

// Image
apiRoutes.post('/images', validateToken, validateNewImage, Image.createImage);
apiRoutes.delete('/images/:id', validateToken, Image.deleteImage);

// BlogPost
apiRoutes.get('/blog', BlogPost.getPosts);
apiRoutes.get('/blog/:id', BlogPost.getPostById);
apiRoutes.post('/blog', validateToken, BlogPost.createPost);
apiRoutes.delete('/blog/:id', validateToken, BlogPost.deletePost);

module.exports = apiRoutes;
