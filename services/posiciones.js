const { conection } = require('./../config/conection');

class Posiciones {
  getPosicionesJugadores() {
    return new Promise((resolve, reject) => {
      let sql = `select rg.nom_usuario as Nombre, rg.ape_usuario as Apellido, rg.iden_usuario as Cc, sum(rg.puntaje) as puntajeUser
      from ronda_ganada as rg
      group by usuario_idusuario
      order by puntajeUser desc;`;
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
