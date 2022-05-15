npm install -g sequelize-cli

Next, we need to configure Sequelize for our project. For that, we will create a .sequelizerc file in our project’s root folder. In this file, we are going to be specifying the paths to files required by Sequelize. 

npm install --save sequelize pg pg-hstore

sequelize init

// create database
createdb -U postgres database_name

// export db command
export DATABASE_URL=our-database-url

//create a new model(table)
sequelize model:create --name TodoItem --attributes content:string,complete:boolean

// run migration
sequelize db:migrate

{
  "development": {
    "username": "postgres",
    "password": "1234",
    "database": "blog",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "1234",
    "database": "blog",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "postgres://siswljax:ta3Okv0umGAP2xhvzlIyYex1Wt8jCmyV@lallah.db.elephantsql.com/siswljax"
  }
}