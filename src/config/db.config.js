const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    HOST: process.env.HOST,
    PORT: process.env.NODE_ENV === 'docker' ? +process.env.MSSQL_DOCKER_PORT : +process.env.MSSQL_LOCAL_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
