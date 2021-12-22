const { conection } = require('./../config/conection');

class Posiciones {
  getPosicionesJugadores() {
    return new Promise((resolve, reject) => {
      let sql = `select tblP.nombre_usuario as Nombre, tblP.apellido_usuario as Apellido, tblP.identificacion_usuario as Cc, sum(tblP.puntaje_usuario) as puntajeUser
      from tabla_posiciones as tblP
      group by usuario_Id `;
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

module.exports = Posiciones;
