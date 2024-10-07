# Fullstack Assessment API

## Description

`fullstack_assessment_api` is an API developed with Node.js and Express that allows managing employee. The API uses MySQL with TypeORM for database management and follows a hexagonal architecture.

## Features

The API provides the following features:

- **Create an employee**
- **Get a list of employees**
- **Get an employee by ID**
- **Update or delete an employee by ID**
- **Get a list of departments**

## Prerequisites

- [Node.js v20](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [NVM](https://github.com/nvm-sh/nvm)

## Technologies

- Node
- Express
- TypeScript
- MySQL
- Zod
- TypeORM

## Installation

1. Clone this repository:

   ```bash
   git clone https://git.number8.com/mauricio.garcia/fullstack.assessment.api.git
   cd fullstack_assessment_api
   ```

2. Use the correct Node.js version:

   ```bash
   nvm use
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage Suggestion

### Check Port Usage

By default, this application will run on port 4001 and is configured to connect to the `fullstack_assessment-db`.

1. Load the environment variables:

   ```bash
   npm run load-dev-env
   ```

2. Start the Docker containers:

   ```bash
   docker-compose up -d
   ```

   The `docker-compose` provide a container with: `fullstack_assessment_api` exposes on port `4001` and `fullstack_assessment-db` exposes on port `3307`

## Development Mode

### Check Port Usage

By default, this application runs on port 4000 and is configured to connect to the `fullstack_assessment-db` in docker container.

1. Start the Docker containers to start the database:

   ```bash
   docker-compose up
   ```

   The `docker-compose` exposes the `fullstack_assessment-db` on port `3307`.

2. To start the API in development mode:

   ```bash
   npm run install
   ```

3. To start the API in development mode:

   ```bash
   npm run dev
   ```

   This will connect runs on port 4000 and load the database from the Docker container.

## Architecture

The API follows a hexagonal architecture composed of:

- **Domain**: The core of the application where the business logic and main entities are defined.
- **Adapters**: This layer handles the input and output of the application, including HTTP controllers, database repositories, and validation schemas for HTTP request inputs.
- **Use-Cases**: This layer defines the application logic that orchestrates the domain operations, using the entities and services defined in the domain.
