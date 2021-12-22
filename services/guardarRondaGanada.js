const { conection } = require('./../config/conection');

class GuardarRondaGanada {
  guardarRondaGanada(
    nombre_usuario,
    apellido_usuario,
    identificacion_usuario,
    puntaje_usuario,
    usuario_id
  ) {
    return new Promise((resolve, reject) => {
      let sql = [
        `SET FOREIGN_KEY_CHECKS=0`,
        `INSERT INTO tabla_posiciones set ?`,
        `SET FOREIGN_KEY_CHECKS=1`,
      ];
      conection.query(
        sql.join(';'),
        [
          {
            nombre_usuario,
            apellido_usuario,
            identificacion_usuario,
            puntaje_usuario,
            usuario_id,
          },
        ],
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
module.exports = GuardarRondaGanada;
