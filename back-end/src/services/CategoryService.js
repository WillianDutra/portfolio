const { Category } = require('../models');
const BadRequest = require('../utils/ErrorStatus/BadRequest');

const getCategories = () => Category.findAll();

const createCategory = (name) => {
    if (!name) throw new BadRequest("Name is required!");
    return Category.create({ name });
};

module.exports = { getCategories, createCategory };
