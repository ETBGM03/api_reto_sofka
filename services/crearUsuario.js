const { conection } = require('./../config/conection');

class CrearUsuario {
  setUsuario(nombre, apellido, identificacion) {
    return new Promise((resolve, reject) => {
      conection.query(
        'INSERT INTO usuario set ? ',
        [{ nombre, apellido, identificacion }],
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
}
module.exports = CrearUsuario;
