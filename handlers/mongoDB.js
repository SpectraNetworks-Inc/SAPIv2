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
        console.log(`Inserted ${JSON.stringify(document)} into ${collection} in SAPI DB `);
    } 
    catch {
        console.log('Failed to Insert Data Into DB');
    }
};

//Find All in collection and return MondoDB
module.exports.fa = (collection) => {
    try {
        client.connect();
        return client.db('sapi').collection(collection).find({});
    } 
    catch {
        console.log('Failed to Find Data in Collection');
    }
};

//Find One in collection and return first document
module.exports.fo = (collection, query) => {
    try {
        client.connect();
        return client.db('sapi').collection(collection).findOne(query);
    } 
    catch {
        console.log('Failed to Find Data in Collection');
    }
};

//Find One and update in collection
module.exports.foau = (collection, queryFind, queryReplace) => {
    try {
        client.connect();
        return client.db('sapi').collection(collection).findOneAndUpdate(queryFind, queryReplace);
    } 
    catch {
        console.log('Failed to Find and update Data in Collection');
    }
};

//Find One and delete in collection
module.exports.foad = (collection, query) => {
    try {
        client.connect();
        return client.db('sapi').collection(collection).findOneAndDelete(query);
    } 
    catch {
        console.log('Failed to Find and update Data in Collection');
    }
};
