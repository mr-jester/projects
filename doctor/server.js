'use strict';
const express = require('express');
const mysql = require('mysql');
const PORT = 8080;
const app = express();
const path = require('path');

app.use = (express.static(__dirname));
app.use = (express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456Q@',
  database: 'doctor'
});

app.get ('/',(req,res) =>{
  res.sendfile(path.join(__dirname,'login.html'))
});

app.listen(PORT,() =>{
  console.log(`I wanna stay healthy while listening to port ${PORT}`);
});