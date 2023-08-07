# movies-explorer-api

## Автор 

- Тома Буштаева

## Написания бекенд части для депломного проекта по поиску фильмов
В данном репозитории хранится бэкенд приложения  Movies Explorer. API содержит следующие роуты:
- POST /signup - регистрация пользователя;
- POST /signin - авторизация пользователя;
- GET /users/me - возвращает информацию о пользователе;
- PATCH /users/me - обновляет информацию о пользователе;
- GET /movies - возвращает все сохранённые текущим пользователем фильмы;
- POST /movies - создаёт фильм;
- DELETE /movies/:movieId - удаляет сохранённый фильм по id;

## Установка и запуск проекта:
Клонировать репозиторий: `git clone https://github.com/`

Установить зависимости: `npm install`

Запустить сервер: `npm run start`

Запустить сервер с hot-reload: `npm run dev`

## Ccылка на репозиторий 

- https://mozhnopozhaluysta.github.io/movies-explorer-api/

## Ccылка на pullrequest 

- https://github.com/mozhnopozhaluysta/movies-explorer-api/pull/1
