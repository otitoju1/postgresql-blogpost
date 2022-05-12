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