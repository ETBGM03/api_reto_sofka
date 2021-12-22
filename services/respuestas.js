const { conection } = require('./../config/conection');

class IniciarJuego {
  RespuestasDeRonda(id) {
    return new Promise((resolve, reject) => {
      // let sql = [
      //   `select ron.nombre_ronda, ron.puntaje, cat.dificultad, pre.id_pregunta, pre.pregunta
      // from ronda as ron
      // join categoria as cat on cat.ronda_id_ronda = ron.id_ronda
      // join pregunta as pre on pre.categoria_id_categoria = cat.id_categoria
      // where ron.id_ronda between ${id} and ${id}
      // order by rand() limit 1`,
      //   `select res.id_respuesta, res.respuesta_pregunta
      // from respuesta as res
      // where pregunta_id_pregunta = ${id};`,
      // ];
      // conection.query(sql.join(';'), (err, result) => {
      let sql = `select res.id_respuesta, res.respuesta_pregunta, res.valida
      from respuesta as res
      where pregunta_id_pregunta = ${id}`;
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

module.exports = IniciarJuego;
