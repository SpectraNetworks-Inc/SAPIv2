const { MongoClient } = require("mongodb");
const config = require("../config");
const uri = `mongodb://${config.MongoDB.mDB_User}:${config.MongoDB.mDB_Pass}@${config.MongoDB.mDB_Host}/?authSource=sapi`;
const client = new MongoClient(uri, { useUnifiedTopology: true } );



//Insert One MondoDB
module.exports.io = (collection, document) => {
    //1B0
    try {
        //Check to see if document exists before writing
        client.connect().then(async () => {
            //2B0
            await client.db(config.MongoDB.mDB_DBName).collection(collection).insertOne(document).then(function (done){
            console.log(JSON.parse(done).ops);
        }).catch(function (err){
            //2B0 Log
            console.log(`Error Code[mdb-2B0] | ${err}`);
            return 'Error Code[mdb-2B0]';
        });
        console.log(`Inserted document into ${collection} in SAPI DB `);
        }).then(() =>{
            client.close();
        });
    } 
    //1B0 Log
    catch (err) {
        console.log(`Error Code[mdb-1B0] | ${err}`);
        return 'Error Code[mdb-1B0] Connection Error/Malformed Data';
    }
};


//Find All in collection and return MondoDB
module.exports.fa = (collection) => {
    //1B1
    try {
        //Check 
        client.connect();
        return client.db(config.MongoDB.mDB_DBName).collection(collection).find({});
    } 
    //1B1 Log
    catch (err) {
        console.log(`Error Code[mdb-1B1] | ${err}`);
        return 'Error Code[mdb-1B1] Program Error/Malformed Data';
    }
};


//Find One in collection and return first document
module.exports.fo = (collection, query) => {
    //1B2
    try {
        //Check 
        client.connect()
        return client.db(config.MongoDB.mDB_DBName).collection(collection).findOne(query);
    }
    //1B2 Log
    catch (err) {
        console.log(`Error Code[mdb-1B2] | ${err}`);
        return 'Error Code[mdb-1B2] Program Error/Malformed Data';
    }
};


//Find One and update in collection
module.exports.foau = (collection, queryFind, queryReplace) => {
    //1B3
    try {
        //Check
        client.connect();
        return client.db(config.MongoDB.mDB_DBName).collection(collection).findOneAndUpdate(queryFind, queryReplace);
    } 
    //1B3 Log
    catch (err) {
        console.log(`Error Code[mdb-1B3] | ${err}`);
        return 'Error Code[mdb-1B3] Program Error/Malformed Data';
    }
};


//Find One and delete in collection
module.exports.foad = (collection, query) => {
    //1B4
    try {
        //Check
        client.connect();
        return client.db(config.MongoDB.mDB_DBName).collection(collection).findOneAndDelete(query);
    } 
    //1B4 Log
    catch (err) {
        console.log(`Error Code[mdb-1B4] | ${err}`);
        return 'Error Code[mdb-1B4] Program Error/Malformed Data'
    }
};


//closes the client after each call
module.exports.close = () => {
    //1B5
    try {
        client.close();
    } 
    //1B5 Log
    catch (err) {
        console.log(`Error Code[mdb-1B5] | ${err}`);
        throw new Error('Error Code[mdb-1B5] Could not close client Connection');
    }
}
