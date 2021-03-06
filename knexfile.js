module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/dev.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "databasemigrations"
    },
    seeds: { directory: "./database/seeds" }
  }
};
