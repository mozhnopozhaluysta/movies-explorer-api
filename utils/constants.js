// Секретный ключ для разработки и отладки приложения:
const SECRET_KEY_DEV = 'dev-secret-key';

// Адрес подключения к базе данных MongoDB с таблицей bitfilmsdb:
const URL = 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  SECRET_KEY_DEV,
  URL,
};
