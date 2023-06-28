const sql = require('mssql');
const dbConfig = require("../config/db.config.js");

const configDB = {
    server: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,
    database: dbConfig.DB,
    options: {
        enableArithAbort: true,
        trustServerCertificate: true
    }
}

async function initDB() {
    try {
        const {database, ...masterDB} = configDB;
        masterDB.database = 'master';
        let pool = await sql.connect(masterDB);
        let result = await pool.query(`IF DB_ID('${configDB.database}') IS NULL CREATE DATABASE ${configDB.database}`);
        return result;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { 
    initDB
}
