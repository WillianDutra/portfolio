module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
        }
    );

    Category.associate = (models) => {
        Category.HasMany(models.PostCategory, {foreignKey: 'categoryId', as: 'postCategory'})
    };

    return Category;
};
