# PIK-Projekt: Backend

## Build

To build project run:
```
gradle build
```

## Database

To configure database connection edit  
```
src/main/resources/application.properties
```


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
