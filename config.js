require('dotenv').config({path: __dirname + '/.env'})

const config = {
    MongoDB: {
        mDB_User: process.env.MONGODB_USER,
        mDB_Pass: process.env.MONGODB_PASS,
        mDB_DBName: process.env.MONGODB_DBNAME,
        mDB_Host: process.env.MONGODB_HOST
    },
    Auth0: {
        JWKS_URI: process.env.JWKSURI,
        Auth0_Audience: process.env.AUTH0_AUD,
        Auth0_Issuer: process.env.AUTH0_ISSUER
    },
    APIConfig: {
        apiPort: process.env.PORT || 8080
    }
}

module.exports = config;