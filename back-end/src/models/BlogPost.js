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
        BlogPost.HasOne(models.User, {foreignKey: 'userId', as: 'user'})
        BlogPost.HasMany(models.Image, {foreignKey: 'blogPostId', as: 'images'})
    };

    return BlogPost;
};
