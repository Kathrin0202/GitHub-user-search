# Сайт поиска пользователей GitHub

### Аттестация для трудоустройства SkyPro

## Примечания по локальному запуску проекта для разработки

Для клонирования репозитория выполните команду:

```bash
git clone https://github.com/Kathrin0202/GitHub-user-search.git
```

Перед запуском проекта необходимо установить зависимости:

```bash
npm install
```

Запуск проекта:

```bash
npm run start
```

Запуск тестов:

```bash
npm test
```

Проект будет запущен по адресу: http://localhost:3000

## Backend данные

Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} (документация: https://developer.github.com/v3/search/#search-users).

## Язык проекта

<div id="socials" aligh="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="js" width="40" height="40"/>&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="html" width="40" height="40"/>&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" title="css" width="40" height="40"/>&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="react" width="40" height="40"/>&nbsp;
</div>

## Стэк библиотек проекта

React
React Router Dom
React Redux
Styled Components
Jest

## Назначение папок и файлов проекта

**/components** - компоненты общие для всего проекта
**/pages** - страницы приложения  
**/store** - файлы, относящиеся к управлению состоянием приложения
**/styled** - глобальные стили приложения
**/api** - функционал посвященный операциям с API (бэкэндом)  
**/app** - главный компонент приложения, который объединяет все другие компоненты

## Структура приложения

1. Главная страница:

Пользователь вводит в поле ввода логин или первые буквы логина. При клике на кнопку "Найти" на странице отображаются 12 элементов. Для перемещения по выдаче имеется навигация по страницам и кнопки назад/вперед. Для сортировки по количеству репозиториев предназначены соответствующий выпадающий список.

2. Модальное окно "Информация о пользователе":

В выпадающем окне появляется информация о пользователе.

3. Страница "Не найдено":

Пользователь может попасть на данную страницу если перешел на не существующий профиль.

### Функционал приложения

- [x] поиск: по логину;
- [x] сортировка: по количеству репозиториев (возрастанию/убыванию);
- [x] использовать React;
- [x] пагинация;
- [x] при клике на элемент открываются подробности (как и какие — на усмотрение разработчика);
- [x] nice to have: реализовать 3 юнит-теста на функционал.
