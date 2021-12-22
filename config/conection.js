const mysql = require('mysql'); //paquete para conectar a mysql

//creamos el objecto de conexion para mysql
const conection = mysql.createConnection({
  host: 'localhost',
  database: 'api_node',
  user: 'root',
  password: '',
  port: '3306',
  multipleStatements: true,
});

//metodo que me permite verificar la conexion con mysql, y en posterior confirmar el mismo
conection.connect((error) => {
  if (error) {
    return console.error('Error de conexion: ' + error);
  }
  console.log('Conectado con el identificador ' + conection.threadId);
});
module.exports = { conection };
