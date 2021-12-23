const { conection } = require('./../config/conection');

class ObtenerPuntos {
  getPuntosUsuario(idUser) {
    return new Promise((resolve, reject) => {
      let sql = `select sum(puntaje) as puntajeUsuario
      from ronda_ganada
      where usuario_idusuario = ${idUser};`;
      conection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
module.exports = ObtenerPuntos;
