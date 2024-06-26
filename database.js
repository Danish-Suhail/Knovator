const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewurlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("DB Connected successfully"))
    .catch((error)=>{
        console.log("DB connection failed");
        console.error(error);
        process.exit(1);
    })
};


// const { MongoClient, ServerApiVersion } = require("mongodb");
// require('dotenv').config();
// // Replace the placeholder with your Atlas connection string
// const uri = process.env.MONGO_URI
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );
// exports.run = async() => {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// // run().catch(console.dir);