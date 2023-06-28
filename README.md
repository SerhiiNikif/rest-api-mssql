# How to use:

## 1. Clone Project into your local machine
```
git clone https://github.com/SerhiiNikif/rest-api-mssql-sequelize.git
```

## 2. Go into project folder and install project dependencies.

```
cd rest-api-mssql-sequelize && npm i
```

## 4. Setting environment file `.env`.
Simply copy `.env.sample` as `.env`, then edit it based on your need.
> Check that the 'sa' user on your local server has the same password as in the .env file.

## 5. Start project
For local use:
> Your local server should be running.
```
npm run dev
```

If you run docker:
```
docker-compose up -d
npm run dev:docker
```
The `animals` DB and `dogs` table will be created, the fields will be filled.

## 6. Let's login to Server Management Studio:
__Server name__: `localhost`(Local use) __or__ `localhost, 14333`(Docker)  
__Login__: sa  
__Password__: <DB_PASSWORD>  
