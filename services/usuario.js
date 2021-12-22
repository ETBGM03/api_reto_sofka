const { conection } = require('./../config/conection');

class CrearUsuario {
  getUsuario() {
    return new Promise((resolve, reject) => {
      conection.query(
        'SELECT * FROM usuario ORDER BY id DESC LIMIT 1;',
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
