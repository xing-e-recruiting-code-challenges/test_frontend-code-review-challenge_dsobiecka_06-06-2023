## Basic Tooling & API

To start the project we created a couple of npm scripts. Notice that the app only shows data after starting the API.

### API

```sh
> cd api
> npm install
> npm run api       # run API on 0.0.0.0:8000
```

The API serves the following endpoint:

```sh
/v1/news?q=      # get the list of articles
```

> The data was obtained through newsapi.org

### App

```sh
> cd app
> npm install
> npm start       # run app on http://localhost:3000/
```

Good luck! 🚀