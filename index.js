const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())


const users = [
  {id:1, name:"Jannat", email:'jannat@gmail.com'},
  {id:2, name:"jomir", email:'jomir@gmail.com'},
  {id:3, name:"jesan", email:'jesan`@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('Hello jjanu!!')
})

app.get('/users', (req, res) => {
  console.log('post is connectf');
  res.send(users)
})

app.post('/users', (req, res) => {
  console.log('hello');
  const newuser = req.body;
  newuser.id = users.length + 1;
  users.push(newuser);
  res.send(newuser)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
