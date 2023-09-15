const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended : false}))
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.set("views",path.resolve("./views"));

module.exports = app;

//AWirfNMH5M6aXIgb
//khana