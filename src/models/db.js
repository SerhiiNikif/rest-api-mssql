const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config();

const configDB = {
    server: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
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
