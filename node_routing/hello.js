const express = require('express')
const app = express()

app.get('/', function(req, resp){
   resp.send('Welcome to the homepage!')
})

app.get('/about', function(req, resp){
    resp.send('This is the about page for my cool application!')
})

app.listen(8090)