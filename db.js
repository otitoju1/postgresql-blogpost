const pg = require("pg");
const { Pool } = pg;

export default () => {
    const pool = new Pool({
        user: "postgres",
        database: "test",
        password: "otitoju",
        host: "127.0.0.1",
        port: 5432
    });

    const connection = {
        pool,
        query: (...args) => {
          return pool.connect().then((client) => {
            return client.query(...args).then((res) => {
              client.release();
              return res.rows;
            });
          });
        },
      };
    
      process.postgresql = connection;
    
      if (callback) {
        callback(connection);
      }
    
      return connection;

}