module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        "PostCategory",
        {
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                foreignKey: true,
            },
            categoryId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                foreignKey: true,
            },
        }
    );

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'post',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
    
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    };

    return PostCategory;
};
