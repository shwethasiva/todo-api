//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
//   console.log(result);
// });
//db.collection('Users').deleteMany({name:'Shwetha'});

//deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=> {
//   console.log(result);
// });

//findOneandDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//      console.log(result);
// });
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5ac226a1013bea3e64c82faf")
}).then((results)=> {
  console.log(JSON.stringify(results,undefined,2));
});

  //client.close();
});
