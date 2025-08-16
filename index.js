const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://indgm07:dADpnxaMugeDWPDF@learn.je1vlcp.mongodb.net/?retryWrites=true&w=majority&appName=learn";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("usersdb");
    const usercollection = database.collection("users");
    
    app.get("/users", async (req, res) => {
      const users = await usercollection.find().toArray();
      res.send(users);
    });
    
    app.post("/users", async (req, res) => {
      const newuser = req.body;
      const result = await usercollection.insertOne(newuser);
      res.send(result);
    });


    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error(err);
  }
}
run();

app.get("/", (req, res) => {
  res.send("Hello jjanu!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
