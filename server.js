const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'))

mongoose.connect("mongodb://localhost/dreams", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use(require("./controller"))

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))