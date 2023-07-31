REST API with Authentication
============================

This repository contains a simple implementation of a RESTful API with authentication features. The API is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) framework. It provides endpoints to perform various CRUD operations on resources while ensuring secure access through authentication.

Table of Contents
-----------------

-   [Installation](https://chat.openai.com/#installation)
-   [Usage](https://chat.openai.com/#usage)
-   [Authentication](https://chat.openai.com/#authentication)
-   [Endpoints](https://chat.openai.com/#endpoints)
-   [Contributing](https://chat.openai.com/#contributing)
-   [License](https://chat.openai.com/#license)

Installation
------------

To run this API locally, follow these steps:

1.  Clone the repository:

    bashCopy code

    `git clone https://github.com/DimitarMitev92/REST-API-with-authentication.git`

2.  Navigate to the project folder:

    bashCopy code

    `cd REST-API-with-authentication`

3.  Install the dependencies:

    bashCopy code

    `npm install`

4.  Set up the configuration file for the database connection and JWT secret:

    -   Create a `.env` file in the root directory of the project.

    -   Add the following environment variables to the `.env` file:

        envCopy code

        `DB_CONNECTION_STRING=your_database_connection_string
        SECRET=your_secret_string`

5.  Start the server:

    bashCopy code

    `npm start`

6.  The API should now be running locally at `http://localhost:8080`.

Usage
-----

Before using the API, make sure it's running locally or deployed to a server. You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints.

Authentication
--------------

This API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, you must include the JWT token in the request header.

-   Obtain a token by sending a `POST` request to the `/auth/login` endpoint with valid credentials.

-   Include the token in the request header as follows:

    makefileCopy code

    `DIMITAR-AUTH: your_token`


Endpoints
---------

The following endpoints are available in the API:

-   POST /auth/register: Register a new user. Requires a JSON payload with `username`, `email` and `password`.
-   POST /auth/login: Log in as an existing user. Requires a JSON payload with `email` and `password`. Returns a token.
-   GET /users: Get a list of all users. Requires authentication.
-   GET /users/:id: Get a specific resource by ID. Requires authentication.
-   DELETE /users/:id: Delete a user. Requires authentication and be an owner.
-   PATCH /USERS/:id: Update an existing resource by ID. Requires authentication and a JSON payload and be an owner.


Contributing
------------

Contributions to this repository are welcome. If you find a bug or have an enhancement in mind, please open an issue or submit a pull request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/LICENSE) file for details.

* * * * *

Thank you for checking out this REST API repository! If you have any questions or feedback, feel free to open an issue or contact the project owner.

Happy coding! 🚀
