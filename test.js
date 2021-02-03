const DB = require('./handlers/mongoDB');




// DB.io('test1', {
//     _id: 'test3',
//     CollectionName: 'test3',
//     testdata: true,
//     testNumber: 9000
// })


DB.fo('test1',{_id:'test3'}).then(function (a){
    if (a == null){
        console.log('Null doe')
    }
    console.log(a);
})




// const test = DB.fa('test1').forEach(function (a){
//     console.log(a);
// });

// DB.foau('test1',{_id: 'test3'}, {$set:{"CollectionName":"ye"}})
