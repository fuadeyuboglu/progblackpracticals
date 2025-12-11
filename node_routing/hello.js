const express = require('express')
const app = express()

app.get('/', function(req, resp){
   resp.send('Welcome to the homepage!')
})

app.get('/about', function(req, resp){
    resp.send('This is the about page for my cool application!')
})

app.get('/random/:max', function(req, resp){
  max = parseInt(req.params.max)
  rand = Math.floor(Math.random()*max) +1
  console.log('Max via url is ' + max + ' rand is ' + rand)
  resp.send('' + rand)
})

// Query string person=name
app.get('/w', function(req, resp){
    person = req.query.person
    resp.send('' + person)
})


app.listen(8090)