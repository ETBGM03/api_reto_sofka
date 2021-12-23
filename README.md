# api_reto_sofka

API para el consumo de preguntas, y todo lo necesario para el reto sofka

## Consideraciones para un correcta ejecución

- Tener instalado wampserver, xampp (server virtual)
- El puerto al que se conectará el api es ej 3306 de mysql
- Ejecutar el schema en mysql, ruta [aquí](./db/schema_api_reto_sofka.sql).
- Ejecutar el llenado de las tablas en mysql, ruta [aquí](./db/llenado_datos_api_reto_sofka.sql).
- Clonar el proyecto
- Desde la terminal instalar las dependencias del proyecto, con el comando `npm i` , despues `npm i nodemon -D` (instalará dependencia de desarrollo)
- ejecuta el comando `npm run dev`
