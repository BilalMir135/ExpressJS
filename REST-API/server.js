const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/posts', postsRoute);

//base route
app.get('/', (req, res) => {
  res.send('Post Page');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Connect to DB')
);
