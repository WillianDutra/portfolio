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
            imageDescription: DataTypes.STRING,
            imagePath: DataTypes.STRING,
        },
        {
            underscored: true,
            tableName: 'images'
        }
    );

    Image.associate = (models) => {
        Image.belongsTo(models.BlogPost, {foreignKey: 'postId', as: 'post'})
    };

    return Image;
};
