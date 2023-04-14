# React + Apollo Project with TypeScript - Front-end

This is a front-end repository for a React + Apollo project with TypeScript. The repository has the following folder structure:

```html
src/ - server/ - [Node.js backend code] - [React components]
```

## Prerequisites

Before getting started, please ensure that you have the following installed in your development environment:

- Node.js (v14 or higher)
- Yarn package manager

## Getting Started

To run the front-end of the React + Apollo project, follow these steps:

- Install dependencies: In the root of the project, run yarn to install the necessary dependencies for the front-end.
- Generate Prisma client: Navigate to the server folder by running cd src/server in your terminal. Then run npx prisma generate to generate the Prisma client for the backend.
- Start the backend server: While still in the server folder, run yarn dev to start the backend server.

## Install Apollo Client

To add Apollo Client and GraphQL to the front-end of the project, run the following command in the root of the src folder:

```html
yarn add @apollo/client graphql
```

This will install Apollo Client and GraphQL packages in your project.

## Start the Front-end

To start the front-end, run yarn start in the root of the src folder. This will start the development server and open the React application in your default web browser.

## Additional Notes

If you encounter any issues or errors, please refer to the documentation or seek help from the project maintainers.
Make sure to keep your dependencies up-to-date and follow the best practices for security and performance.
