const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
  if(err) return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: "Something to do.",
  //   completed: false
  // }, (err, result) => {
  //   if(err) return console.log('Unable to add todo');
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertMany([
  //   {
  //     name: 'Gee',
  //     age: 25,
  //     loaction: 'Texas'
  //   }, {
  //     name: 'Gee',
  //     age: 25,
  //     loaction: 'Texas'
  //   }, {
  //     name: 'Gee',
  //     age: 25,
  //     loaction: 'Texas'
  //   }, {
  //     name: 'Gee',
  //     age: 25,
  //     loaction: 'Texas'
  //   }
  // ], (err, result) => {
  //   if(err) return console.log('Unable to add todo');
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').find({name: 'mike' }).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch((err) => {
  //   console.log('Unable to fetch users', err);
  // })

  // db.collection('Users').deleteMany({name: 'Gee' }).then((results) => {
  //   console.log(results);
  // }).catch((err) => {
  //   console.log('Unable to fetch users', err);
  // })

  // db.collection('Users').findOneAndDelete({name: 'Gee' }).then((results) => {
  //   console.log(results);
  //
  // }).catch((err) => {
  //   console.log('Unable to fetch users', err);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c184e12e75cc720f07b021e")
  },{
    $set: {
        name: 'mango',
        location: 'tropics island'
    },
    $inc: {
      age: 4
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);

  }).catch((err) => {
    console.log('Unable to fetch users', err);
  })

  // client.close();
})
