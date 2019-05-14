const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
res.render('home.ejs');})

app.get('/aman/:name', (req,res) =>{
var names = req.params.name;
res.render('home.ejs',{name:names})})

	

app.get("*", (req,res) => res.send('Cannot found Page'))

app.listen(port, () => console.log('Server is started'))
