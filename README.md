# Twitter

### Описание проекта
Данный проект позволяет оставить свой твит.

В этом приложении:
- Composition API;
- Vue Router;
- динамическая сортировка твитов;
- порталы;
- работа по REST API с Firebase;
- запрос, ответ, дожидание ответа;
- GET / POST / PUT запросы;
- работа со сторонним API (аватар пользователей);
- работа с axios и настройка своего конфига;
- SCSS.
***
### Просмотр проекта

https://github.com/Dasha987/twitter-vue3/assets/33686892/f3446a48-b2ba-4c92-8d1a-80e7ce674a3a

***
## Project setup
Чтобы была возможность использовать проект под свои нужды, необходимо в файле "vue.config.js" закомментировать строчку "roductionSourceMap: false". Она служит для корректного билдинга приложения, благодаря ей в папку "dist" не попадут файлы с расширением .map, поэтому при билдинге строчку рекомендую раскомментировать.
```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
