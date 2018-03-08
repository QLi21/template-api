const express = require('express')
const app = express()
const router = require('./router')
const morgan = require('morgan')

app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(router)

const port = process.env.PORT || 8080; 
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
