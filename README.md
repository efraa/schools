# Schools 🚀

📢 Schools aims to be an application with the main objective <br />
of automating education processes.

Many of the functionalities are based on the daily work <br />
of organizations and their teachers.

### Development and running the application: 📌
***

1. Clone
2. Move to --> `cd schools`
3. copy `.default.env` to `.env`
4. Run `yarn`

### Env variables: 📌
***

* `API_URL` : URL base of your API. --> `http://localhost`
* `API_PORT` : API PORT --> default `2302`
* `API_PREFIX_ROUTES` : default --> `/api/v1`

### IMPORTANT NOTE: 📌
***

__Make sure the following values ​​are the same in your API.__

* `TOKEN_EXPIRE` : Copy from your API --> default `72h`
* `SECRET` : Copy from your API --> example: `secret-schools-api`

### Ready 📌
***

__Run__ `yarn start` ✔️

Runs the app in the development mode.<br>
Your browser will open in [http://localhost:3000](http://localhost:3000).


### Conventional Commits ✔️
***

build: Changes that affect the build system or external dependencies (example scopes: yarn, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, Docker)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests