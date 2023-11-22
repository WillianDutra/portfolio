module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
        "BlogPost",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.STRING,
            shortDescription: DataTypes.STRING,
            content: DataTypes.STRING,
            userId: { type: DataTypes.INTEGER, foreignKey: true },
            published: DataTypes.DATE,
        }
    );

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
        BlogPost.hasMany(models.Image, { foreignKey: 'blogPostId', as: 'images' })
    };

    return BlogPost;
};
