# PIK-Projekt: Backend

## Database

To configure database connection edit  
```
src/main/resources/application.properties
```


To install PostgreSQL run
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

To change password for postgres user run (default password: postgres)
```
sudo -u postgres psql postgres
\password postgres
```

To create database run
```
sudo -u postgres createdb dbname
```
## Build

To build project run:
```
gradle build
```

## Development

To start application run:
```
gradle bootrun
```
