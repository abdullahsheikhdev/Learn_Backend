const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const users = [
    {id:1, name:'Shobuj', email:'sobuj@email.com'},
    {id:2, name:'Sohun', email:'sohun@email.com'},
    {id:3, name:'Jesan', email:'jesan@email.com'},
]

app.get('/', (req, res) => {
  res.send('Hello jan!',users)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
