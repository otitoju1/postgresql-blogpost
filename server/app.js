const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// Set up the express app
const app = express();
const PORT = process.env.PORT || 8080;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
