const rateLimiter = require('express-rate-limit');

// Ограничитель запросов к серверу:
const limiter = rateLimiter({
  max: 160, // Максимальное число запросов за указанный период
  windowMS: 55000, // Продолжительность периода
  // Сообщение, отправляемое при превышении лимита запросов
  message: 'Превышено количество запросов на сервер. Попробуйте повторить запрос позже',
});

// Экспортируем ограничитель запросов:
module.exports = limiter;
