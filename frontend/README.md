# PIK-Projekt: Frontend

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
