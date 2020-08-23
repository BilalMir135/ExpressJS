const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

const PORT = process.env.PORT || 5000;

//In this approach we have to create route for every file specifically
/* app.get('/', (req, res) => {
  //res.send('<h1>Hello World!!</h1>');

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

//Init middleware
/* app.use(logger); */

//Express provide us function which make a folder static in which all files can route

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on Port => ${PORT} `));

/* //Creating API
app.get('/api/members', (req, res) => res.send(members));

//Get single member
app.get('/api/members/:id', (req, res) => {
  //if id doesn't match it will return null list
  // res.send(members.filter((member) => member.id === Number(req.params.id))); 
  const found = members.some((member) => member.id === Number(req.params.id));
  if (found) {
    res.send(members.filter((member) => member.id === Number(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with id ${req.params.id}` });
  }
}); */
