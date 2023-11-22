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
            name: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
        }
    );

    Image.associate = (models) => {
        Image.hasOne(models.BlogPost, {foreignKey: 'postId', as: 'post'})
    };

    return Image;
};
