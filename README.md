
# Bookstore API Backend

This is a backend API service for a Bookstore application. It supports user registration, login, and full CRUD operations for books. The project also includes automated API tests written in Cypress, with continuous integration configured to run all tests on each update.

---

## Features

- User Registration
- User Login
- Create a Book
- View All Books
- Update Book Details
- Delete a Book

---

## Stack

- Node.js  
- Express.js  
- Cypress (for API testing)

---

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-directory>
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Check for the `.env.example` file in the root of the project. Create a new `.env` file using the same format, and fill in the required values:

```bash
cp .env.example .env
```

Edit `.env` as needed for your local development environment.

---

## Running the API

Start the development server:

```bash
npm run start
```

This will launch the API locally, typically on `http://localhost:5000` or the port specified in your `.env`.

---

## API Testing

Automated API tests are written using **Cypress** and follow a **data-driven testing approach** using JSON test data the test coverage only covers user module. To test if user can login, register and read, edit and delete.

### Sample Test Data

Located in:

```
cypress/fixtures/
```

### Run API Tests

```bash
npm run test
```

This command will execute all Cypress-based API tests locally in headless mode.

---

## Continuous Integration (CI)

CI is configured using GitHub Actions. Each time code is pushed or a pull request is created:

* The environment is set up (Node 16)
* Dependencies are installed
* Cypress API tests are executed

Deployment or further workflows only proceed if all tests pass, ensuring that the API remains stable and fully tested.

---

## Folder Structure Overview

```
.
├── cypress/
│   ├── fixtures/         # JSON test data for data-driven testing
│   ├── integration/      # API test specs
│   ├── support/          # Cypress commands and config
├── src/                  # Main backend source code
├── .env.example          # Sample env configuration
├── package.json
└── README.md
```

---

## License

This project is open-source and available under the MIT License.

```

---

Let me know if you’d like:

- Help writing the `.env.example`
- Cypress API test examples
- GitHub Actions YAML file to run these tests automatically

Just say the word.
```
