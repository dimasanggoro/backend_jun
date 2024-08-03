module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD || '', // Default ke string kosong jika tidak ada password
    DB: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT
  };
  