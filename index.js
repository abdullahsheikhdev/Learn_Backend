const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const users = [
  {id:1, name:"Jannat",}
]

app.get('/', (req, res) => {
  res.send('Hello jjanu!')
})

app.get('/users', (req, res) => {
  res.send(users)
})



app.listen(port, () => {
  console.log(`Example app listening on por ${port}`)
})
