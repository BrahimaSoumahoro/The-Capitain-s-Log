const mongoose = require('mongoose');
// Global configurations
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function () {
  // Connect to MongoDB
  mongoose.set('strictQuery', true);
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // A disconnect.... Will wait 5 sec and then call db.close
  //   setTimeout(() => {
  //     db.close();
  //   }, 5000);

  // listen error, success and close events (ie define callback functions for events) on connection (.on)
  db.on('error', (error) => console.error(error));
  db.on('open', () => console.log('Connected to MongoDB for Capdb'));
  db.on('close', () => console.log('Mongo (Capdb) disconnected'));
  
};


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://jbrahism2:<password>@cluster0.5kj0r2l.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
