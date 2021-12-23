const { conection } = require('./../config/conection');

class GuardarRondaGanada {
  guardarRondaGanada(
    nom_usuario,
    ape_usuario,
    iden_usuario,
    puntaje,
    usuario_idusuario
  ) {
    return new Promise((resolve, reject) => {
      conection.query(
        `INSERT INTO ronda_ganada set ?`,
        {
          nom_usuario,
          ape_usuario,
          iden_usuario,
          puntaje,
          usuario_idusuario,
        },
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
