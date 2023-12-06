module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            name: DataTypes.STRING,
            role: DataTypes.STRING,
            createdAt: DataTypes.DATE,
        },
        {
            underscored: true,
            tableName: 'users'
        }
    );

    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogPosts' })
    };

    return User;
};
