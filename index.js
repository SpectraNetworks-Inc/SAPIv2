const DB = require('./handlers/mongoDB');


DB.fo('test1',{Yeet:'Yeetus'}).then(function (a){
    console.log(a);
})

const test = DB.fa('test1').toArray().then(function (results){
    console.log(results);
});
