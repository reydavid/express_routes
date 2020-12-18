const express = require('express'); //Like import Component from 'react'
const app = express(); // make an instance of express (boilerplate)

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
})
app.get('/login', function(req,res){
    res.sendFile(__dirname+'/login.html')
})
app.get('/about', function(req,res){
    res.sendFile(__dirname+'/about.html')
})
app.get('/data', function(req,res){
    res.send({name:"Comartha", person:"yes"});
})

app.listen(3001, ()=> {
    console.log("server 3001");
})