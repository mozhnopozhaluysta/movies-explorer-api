// Создание роутера в Express.
const userRouter = require('express').Router();

// Импорт констант валидаторов:
const { changeUserProfileValidator } = require('../middlewares/validation');

// Импорт функций для работы с данными пользователя.
const {
  getCurrentUser, changeUserProfile,
} = require('../controllers/users');

// Маршрут для получения данных пользователя. GET-запрос.
userRouter.get('/users/me', getCurrentUser);
// Маршрут для обновления данных пользователя. PATCH-запрос.
userRouter.patch('/users/me', changeUserProfileValidator, changeUserProfile);

// Экспорт роутера:
module.exports = userRouter;
