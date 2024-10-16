# Todoshka

## Description

**Todoshka** is a simple and intuitive task management application built using **React**, **TypeScript**, and **Redux**. This project is designed following modern frontend development principles such as **Feature-Sliced Design (FSD)** and **clean code** practices. It allows users to add, edit, delete, and filter tasks, and it's highly customizable with support for theming and translations.

The app's architecture is modular, making it scalable and easy to maintain. It leverages **Material-UI** for UI components, **SCSS Modules** for styling, and **Jest** and **Testing Library** for unit tests. Additionally, the project uses **Webpack** for bundling the application.

## Features

- **React with TypeScript**: The app is built using React and fully typed with TypeScript for increased maintainability and scalability.
- **Redux Toolkit**: Used for state management, handling tasks, and UI state like filters and sorting.
- **Feature-Sliced Design (FSD)**: Project architecture promotes separation of concerns and makes the app more maintainable.
- **Material UI**: For modern and responsive UI components.
- **SCSS Modules**: Scoped CSS styling using SCSS Modules for each component.
- **i18n Support**: Multi-language support using i18next for translations.
- **Dark/Light Themes**: Built-in theming support to switch between light and dark modes.
- **ESLint and Prettier**: For consistent code formatting and linting across the project.
- **Jest and Testing Library**: Comprehensive unit tests for components and logic.
- **Webpack**: Efficiently bundles and optimizes the application for production.

## Table of Contents

1. [Installation](#installation)
2. [Available Scripts](#available-scripts)
4. [Testing](#testing)
5. [Technologies Used](#technologies-used)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/marynovoselova/todoshka.git
    cd todoshka
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

This will run the application in development mode at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder using **Webpack**.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run lint`

Runs **ESLint** to statically analyze your code.

### `npm run format`

Runs **Prettier** to automatically format your code.

## Testing

The project uses **Jest** and **@testing-library/react** for testing React components and logic.

To run the tests:

```bash
npm test
```

## Technologies Used

- **React**
- **TypeScript**
- **Redux Toolkit**
- **Material UI**
- **SCSS Modules**
- **i18next**
- **Jest**
- **React Testing Library**
- **ESLint**
- **Prettier**
- **Webpack**
- **Babel**
