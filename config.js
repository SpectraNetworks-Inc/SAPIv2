require('dotenv').config({path: __dirname + '/.env'})

const config = {
    MongoDB: {
        mDB_User: process.env.MONGODB_USER,
        mDB_Pass: process.env.MONGODB_PASS,
        mDB_DBName: process.env.MONGODB_DBNAME,
        mDB_Host: process.env.MONGODB_HOST
    },
}

module.exports = config;