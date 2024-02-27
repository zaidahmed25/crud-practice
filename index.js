const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

app.listen(port, () => {
  console.log(`hello world ${port}`)
})



// mongodb+srv://zaidahmedghazi:<password>@cluster0.nj0cgcn.mongodb.net/