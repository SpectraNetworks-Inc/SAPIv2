const { MongoClient } = require("mongodb");
const config = require("../config");
const uri = `mongodb://${config.MongoDB.mDB_User}:${config.MongoDB.mDB_Pass}@${config.MongoDB.mDB_Host}/?authSource=sapi`;

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true } );


//Insert One MondoDB
module.exports.io = (collection, document) => {
    try {
        client.connect();
        client.db('sapi').collection(collection).insertOne(document);
        console.log(`Inserted ${document} into ${collection} in SAPI DB `);
    } 
    catch {
        console.log('Failed to Insert Data Into DB');
    }
};