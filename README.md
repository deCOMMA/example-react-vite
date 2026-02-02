# React + TypeScript + Vite - Example Project

Современное React приложение с архитектурой Feature-Sliced Design (FSD), TypeScript.

## Цель проекта
Проект демонстрирует:
- применение Feature-Sliced Design (FSD) для масштабируемой архитектуры
- полный стек инструментов для enterprise-разработки на React/TypeScript
- оптимизацию производительности через код-сплиттинг, мемоизацию, асинхронность 
- контроль качества кода с покрытием тестами (unit, интеграционные, скриншотные)
- модульность и переиспользуемость через строгое разделение слоев
- готовую инфраструктуру для быстрого старта новых проектов

## Структура проекта 
```
src/
├── app/                 # Инициализация приложения, провайдеры, роутинг
│   ├── providers/       # Провайдеры (Store, Router, Theme, i18n)
|   ├── test/            # setup тестов
|   ├── types/           # типизация для тестов и svg
│   └── styles/          # Глобальные стили, темы
│
├── pages/              # Страницы приложения
│   └── компонент Страницы/       # publicAPI для импортов,  
|        └── ui/                  # .tsx компонент страницы, стили, stories, асинхронная страница для имитации загрузки
|        └── index.ts             # publicAPI для экспортов
|       
├── widgets/            # Самостоятельные виджеты ( по аналогии с страницами ) 
|
├── features/           # Функциональности пользователя ( какие-то бизнес фичи ) 
|
├── entities/           # Бизнес-сущности
│   └── компонент Сущности/        # Сущность статьи
|        └── ui/                   
|        └── index.ts             
|        └── model/               
│            ├── selectos/       #  селекторы + тесты
|            ├── services/       #  запросы + тесты
|            ├── slice/          #  Slice из reduxjs/toolkit + тесты
│            └── types/          #  типы для этой сущности
|
│
└── shared/            # Переиспользуемый код
    ├── api/           # API клиенты, настройки
    ├── assets/        # Иконки, изображения
    ├── config/        # Конфигурации (i18n, роутинг, storybook, тесты)
    ├── const/         # Константы
    ├── fonts/         # Шрифты
    ├── helpers/       # Вспомогательные функции, утилиты
    └── ui/            # UI компоненты (UIKit) - .tsx + .stories.tsx + .css
        ├── Avatar/     
        ├── Button/     
        └── ...
```

## Основные команды
- `npm run dev` - Запуск приложения в режиме разработки
- `npm run build` -  Сборка production версии (откроется Bundle Analyzer в браузере)
- `npm run start:dev:server` - Запуск сервера для API

### Команды для тестов
- `npm run storybook` - Запуск Storybook для документации компонентов
- `npm run build-storybook` - Сборка Storybook
- `npm run chromatic` - Публикация Storybook в Chromatic
- `npm run test` - Запуск всех тестов (кроме stories)
- `npm run validate` - Полная проверка проекта (линт + формат + тесты)

### Проверка кода
- `npm run lint` - Проверка всего кода ESLint
- `npm run lint:ts` - Проверка TypeScript файлов
- `npm run lint:css` - Проверка CSS/SCSS файлов
- `npm run lint:i18n` - Проверка i18n переводов
- `npm run lint:ts:fix` - Автоисправление TypeScript кода
- `npm run lint:css:fix` - Автоисправление CSS/SCSS кода
- `npm run lint:i18n:fix` - Автоисправление i18n ошибок
- `npm run fix:all` - Автоисправление всех проблем разом
- `npm run format` - Форматирование всего проекта
- `npm run format:check` - Проверка форматирования
- `npm run format:ts` - Форматирование TypeScript файлов
- `npm run validate` - Полная проверка проекта (линт + формат + тесты)

## Взаимодействие с проектом
Запуститем приложение в режиме разработки и dev:server через отдельные терминалы. Чтобы авторизоваться используйте пользователя `username : admin; password: 123` ( подробнее можно посмотреть `\example-react-vite\json-server\db.json` )
```
  "users": [
    {
      "id": "1",
      "username": "admin",
      "password": "123",
      "role": "ADMIN",
      "avatar": "https://i.pinimg.com/originals/57/9c/8a/579c8af00e1b71a721d97c2b36547293.png"
    },
```

Из функциональных страниц - страница "Профиля" и "Статей", которые доступны только авторизованным пользователям
`/profile` - Страница профиля
`/articles/id` - Страница статьи (в моковом API есть только статья с id=1)





