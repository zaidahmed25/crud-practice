const express = require('express');
require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})