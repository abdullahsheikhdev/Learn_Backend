const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


// const users = [
//   {id:1, name:"Jannat", email:'jannat@gmail.com'},
//   {id:2, name:"jomir", email:'jomir@gmail.com'},
//   {id:3, name:"jesan", email:'jesan`@gmail.com'},
// ]

// password:ktDZgKvs5agTfgKP


const uri = "mongodb+srv://abdullah4220:ktDZgKvs5agTfgKP@cluster0.bfisgwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello jjanu!')
})

// app.get('/users', (req, res) => {
//   console.log('post is connectf');
//   res.send(users)
// })

// app.post('/users', (req, res) => {
//   console.log('hello');
//   const newuser = req.body;
//   newuser.id = users.length + 1;
//   users.push(newuser);
//   res.send(newuser)
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
