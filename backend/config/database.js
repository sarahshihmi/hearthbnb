const config = require('./index');

console.log(process.env.USE_LOCAL_POSTGRESS === 'true');
module.exports = {
  development: {
    storage: config.dbFile,

    ...(process.env.USE_LOCAL_POSTGRESS === 'true' ? {
      use_env_variable: 'DATABASE_URL',
        dialectOptions: {
      },
      define: {
          schema: process.env.SCHEMA
      },
    } : {
      dialect: "sqlite",
    }),
    
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      }
    },
    define: {
      schema: process.env.SCHEMA
    }
  }
};