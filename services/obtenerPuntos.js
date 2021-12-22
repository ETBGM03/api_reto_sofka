const { conection } = require('./../config/conection');

class ObtenerPuntos {
  getPuntosUsuario(idUser) {
    return new Promise((resolve, reject) => {
      let sql = `select sum(puntaje_usuario) as puntajeUsuario
      from tabla_posiciones
      where usuario_Id = ${idUser};`;
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
