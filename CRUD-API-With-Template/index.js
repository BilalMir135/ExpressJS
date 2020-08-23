const express = require('express');
const exphbs = require('express-handlebars');
const members = require('./members');

const app = express();
const PORT = process.env.PORT || 5000;

//Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Home Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Members App',
    members,
  })
);

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on Port => ${PORT} `));
