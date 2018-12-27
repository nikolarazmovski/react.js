
const express = require('express')
const app = express()
const port = 3030
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/admin', function (err, db) {
  if (err) throw err
   console.log("succes")

  
})