const express = require('express')
const app = express()
const recipes = require('./potato_recipes.json');


app.get('/potato', (req, res) => {
    const submittedKeys = req.query.key;

});


app.listen(8090)