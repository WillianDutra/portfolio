module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
        "Image",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            postId: { type: DataTypes.INTEGER, foreignKey: true },
            imageName: DataTypes.STRING,
            imagePath: DataTypes.STRING,
        }
    );

    Image.associate = (models) => {
        Image.hasOne(models.BlogPost, {foreignKey: 'postId', as: 'post'})
    };

    return Image;
};
