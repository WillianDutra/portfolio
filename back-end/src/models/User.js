module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            role: DataTypes.STRING,
            createdAt: DataTypes.DATE,
        },
    );

    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogPosts' })
    };

    return User;
};
