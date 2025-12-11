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

app.get('/submit-name', (req, res) => {
    // req.query is an object holding all the variables from the URL query string
    // We access the variable named 'person'
    const submittedName = req.query.person;

    // Send a customized message back to the user
    if (submittedName) {
        res.send(`<h1>Hello, ${submittedName}!</h1><p>Your data was successfully received by the server.</p>`);
    } else {
        res.send('<h1>Hello, stranger!</h1><p>You submitted the form but didn\'t enter a name.</p>');
    }
});


app.listen(8090)