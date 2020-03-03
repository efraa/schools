# Schools 🏫

Schools aim to be an application with the primary objective of automating education processes.
Many of the functionalities are based on the daily work of organizations and their teachers.

## Developing & Running

### Requisites

* Node >=10.x.
* Yarn.
* The backend must be running (can be local or not).

### Start

1. Clone this repo.
2. Move to the cloned directory.
3. Copy `.default.env` to `.env`.
4. Update values on your new `.env` file.
5. Run `yarn install`.

### Env variables

* `API_URL` : The URL where your API is running (FULL URL).
* `REACT_APP_TOKEN_EXPIRE` : The amount of time before a token expires.
* `REACT_APP_TOKEN_SECRET` : The secret to sign JWTs.

#### Notice

**Make sure your `REACT_APP_TOKEN_EXPIRE` and `REACT_APP_TOKEN_SECRET` env ​​are the same in your API.**

### Ready

**Run** `yarn start`: this will start the app in the development mode.
Your browser will open in `http://localhost:3000`.

## Conventional Commits

* **build**: Changes that affect the build system or external dependencies (example scopes: yarn, npm).
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, Docker).
* **docs**: Documentation only changes.
* **feat**: A new feature.
* **fix**: A bug fix.
* **perf**: A code change that improves performance.
* **refactor**: A code change that neither fixes a bug nor adds a feature.
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
* **test**: Adding or correcting tests.
