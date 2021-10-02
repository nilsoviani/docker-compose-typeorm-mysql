# Base project built with TypeORM and Docker | Proyecto base contruido con TypeORM y Docker
  
Steps to run this project | Pasos para correr el proyecto:

 1. Create an .env file with the configuration data and the connection to the database | Crear un archivo .env con los datos de configuración y la conexión a la base de datos:
 *(Example | Ejemplo)*
	```
	DB_HOST=127.0.0.1
	DB_PORT=3307
	DB_USERNAME=admin
	DB_PASSWORD=adminpw
	MYSQL_ROOT_PASSWORD=adminpw
	DB_DATABASE=typeorm
	```

 2. Run next command | Ejecutar el siguiente comando:
	`npm i`

3. Run docker image | Ejecutar la imagen de Docker:
	*The database expose port is 3307 but in the networks of containers, database port is 3306 | El puerto externo de la base de datos es 3307 pero dentro del contenedor es 3306*

	`docker-compose up -d`
 
4. Finally it is possible to run the project with the following commands | Finalmente es posible ejecutar el proyecto con los siguientes comandos:

	- `npm start`
	- `npm start:dev`
	- `npm start:prod`
