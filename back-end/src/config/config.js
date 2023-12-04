require('dotenv').config();

const environment = process.env.NODE_ENV || "development";

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: 
    `${process.env.MYSQL_DB_NAME || 'portfolio'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '123456',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  define: {
    timestamps: false,
    freezeTableName: true
  },
  logging: process.env.DEBUG !== 'false' ? console.log : false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
