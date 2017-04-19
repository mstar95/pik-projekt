# PIK-Projekt

# Frontend

## Initial setup

To download all the required dependencies run:
```
npm install
```

## Development

During development it is recommended to use the `webpack-dev-server`. To start the server run:
```
npm start
```
This will **not** output any files. Webpack compiles the
code and serves it from memory.

To view the application navigate to [`http://localhost:8080/`](http://localhost:8080/) in the browser.
If the specified port number is already taken by another application, the port number rolls forward to the next available number (e.g. 8080 -> 8081).

## Testing

Testing is done using `jest`. To run the tests enter:
```
npm test
```
Jest will automatically find and run all files with the `test.js` or `test.jsx` extension;

## Production

To generate production ready code run:
```
npm run build
```
You can find the code in the `build` folder.

# Backend

## Database

To configure database connection edit (default user: postgres, default password: 123456):
```
src/main/resources/application.properties
```

To install PostgreSQL run:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

To change password for postgres user run (default password: postgres):
```
sudo -u postgres psql postgres
\password postgres
```

To create database run:
```
sudo -u postgres createdb dbname
```

## Build

To build project run:
```
./gradlew build
```

## Test

To test the application run:
```
./gradlew test
```

## Development

To start application run:
```
./gradlew bootrun
```

# Travis

Link to Travis:
```
https://travis-ci.org/sz-piotr/pik-projekt
```
