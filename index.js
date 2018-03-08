const express = require('express')
const app = express()
const router = require('./router')

// app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(router)

const port = process.env.PORT || 3011;
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);