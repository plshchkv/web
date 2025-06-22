# # <img src="https://plshchkv.ru/favicon.ico" width="32" style="vertical-align:middle; margin-right:2px;" /> nextweb

Это современное приложение на [Next.js](https://nextjs.org), использующее React, TypeScript, Tailwind CSS и кастомные хуки/контекст для управления цветовой схемой сайта.

## Структура проекта

- **[app/](app/)** — корневые страницы и layout приложения ([app/layout.tsx](app/layout.tsx), [app/page.tsx](app/page.tsx), [app/not-found.tsx](app/not-found.tsx)), глобальные стили ([app/globals.css](app/globals.css)).
- **[components/](components/)** — переиспользуемые компоненты интерфейса:  
  - Основные: [Header.tsx](components/Header.tsx), [Title.tsx](components/Title.tsx), [ApplyStoredColor.tsx](components/ApplyStoredColor.tsx), [HueColorChanger.tsx](components/HueColorChanger.tsx), [LightnessColorChanger.tsx](components/LightnessColorChanger.tsx)
  - UI: [UI/Button.tsx](components/UI/Button.tsx), [UI/Dropdown.tsx](components/UI/Dropdown.tsx), [UI/Container.tsx](components/UI/Container.tsx), [UI/Navigate.tsx](components/UI/Navigate.tsx)
- **[context/ColorSettingsContext.tsx](context/ColorSettingsContext.tsx)** — контекст для управления цветовой схемой (hue, lightness) и их сохранения в localStorage.
- **[hooks/useColorSettings.ts](hooks/useColorSettings.ts)** — хук для работы с настройками цвета вне контекста.
- **[public/](public/)** — публичные ассеты (иконки, favicon и т.д.).
- **[.next/](.next/)** — служебная папка Next.js (автоматически генерируется).
- **[package.json](package.json)** — зависимости, скрипты запуска и сборки.
- **[tsconfig.json](tsconfig.json)** — конфигурация TypeScript.
- **[postcss.config.mjs](postcss.config.mjs)**, **[eslint.config.mjs](eslint.config.mjs)** — конфиги для PostCSS и ESLint.

## Основные возможности

- **Изменение цветовой схемы**:  
  Используйте компоненты [`HueColorChanger`](components/HueColorChanger.tsx) и [`LightnessColorChanger`](components/LightnessColorChanger.tsx) для настройки цвета интерфейса.  
  Значения сохраняются в localStorage через [`ColorSettingsContext`](context/ColorSettingsContext.tsx) и автоматически применяются при загрузке ([ApplyStoredColor.tsx](components/ApplyStoredColor.tsx)).

- **UI-компоненты**:  
  Кнопки ([Button.tsx](components/UI/Button.tsx)), выпадающие меню ([Dropdown.tsx](components/UI/Dropdown.tsx)), контейнеры ([Container.tsx](components/UI/Container.tsx)), навигация ([Navigate.tsx](components/UI/Navigate.tsx)).

- **Адаптивный дизайн**:  
  Используется Tailwind CSS ([app/globals.css](app/globals.css)), поддержка мобильных устройств.

- **Интеграция с внешними сервисами**:  
  Ссылки на Github и Telegram реализованы через [`Header`](components/Header.tsx) и [`Dropdown`](components/UI/Dropdown.tsx).

## Описание компонентов и функций

### Контекст и хуки

- **[`context/ColorSettingsContext.tsx`](context/ColorSettingsContext.tsx)**  
  Контекст для управления цветовой схемой сайта (оттенок и светлота).  
  - `ColorSettingsProvider` — провайдер, который хранит значения hue и lightness, синхронизирует их с localStorage и CSS-переменными.
  - `useColorSettings` — хук для доступа к значениям hue/lightness и их изменению из любого компонента.

- **[`hooks/useColorSettings.ts`](hooks/useColorSettings.ts)**  
  Хук для работы с настройками цвета вне контекста.  
  - Позволяет получить и изменить hue/lightness, синхронизирует их с localStorage и CSS.

### UI-компоненты

- **[`components/UI/Button.tsx`](components/UI/Button.tsx)**  
  Универсальная кнопка с поддержкой иконок, текста и кастомных классов.

- **[`components/UI/Dropdown.tsx`](components/UI/Dropdown.tsx)**  
  Выпадающее меню с анимацией, поддержкой разных триггеров (клик/hover), позиционированием и выравниванием.

- **[`components/UI/Container.tsx`](components/UI/Container.tsx)**  
  Контейнер с фоном, скруглениями и адаптивной версткой для обертки контента.

- **[`components/UI/Navigate.tsx`](components/UI/Navigate.tsx)**  
  Обертка для ссылок. Позволяет открывать как внутренние, так и внешние ссылки (с target="_blank" и rel).

### Основные компоненты

- **[`components/Header.tsx`](components/Header.tsx)**  
  Шапка сайта с навигацией, переключателями цвета, языков и ссылками на соцсети.

- **[`components/Title.tsx`](components/Title.tsx)**  
  Заголовок главной страницы с поддержкой локализации.

- **[`components/HueColorChanger.tsx`](components/HueColorChanger.tsx)**  
  Слайдер для изменения оттенка основной цветовой схемы.

- **[`components/LightnessColorChanger.tsx`](components/LightnessColorChanger.tsx)**  
  Слайдер для изменения светлоты основной цветовой схемы.

- **[`components/LanguageSwitcher.tsx`](components/LanguageSwitcher.tsx)**  
  Переключатель языка интерфейса с выпадающим меню.

### Пример работы ColorSettingsContext

- При изменении hue или lightness через слайдеры, значения сохраняются в localStorage и применляются к CSS-переменным (`--c-primary`).
- При загрузке страницы значения автоматически подтягиваются из localStorage.

### Пример работы LanguageSwitcher

- Определяет текущий язык из URL.
- Позволяет переключить язык, изменяя часть пути (`/ru/`, `/en/`).

---

## Быстрый старт

1. Установите зависимости:
    ```sh
    npm install
    ```
2. Запустите dev-сервер:
    ```sh
    npm run dev
    ```
3. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Сборка и запуск

- Сборка:  
  ```sh
  npm run build
  ```
- Запуск production-сервера:  
  ```sh
  npm start
  ```

## Линтинг

Проверка кода на ошибки:
```sh
npm run lint
```

## Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs)
- [Документация React](https://react.dev/)
- [Документация Tailwind CSS](https://tailwindcss.com/)

---

**Каждая функция и компонент подробно описаны выше. Для изменений интерфейса и логики используйте соответствующие файлы в [components/](components/), [context/](context/) и [hooks/](hooks/).**
