require('dotenv').config(); 
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');
// Set up the express app
const app = express();
const PORT = process.env.PORT || 8080;

// Log requests to the console.
app.use(logger('dev'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next()
})

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routes);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning.',
}));

app.listen(PORT, () => {
    console.log(`App up on port ${PORT}`);
});

// https://www.digitalocean.com/community/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

// https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/
module.exports = app;
