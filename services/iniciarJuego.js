const { conection } = require('./../config/conection');

class Respuestas {
  rondaAJugar(id) {
    return new Promise((resolve, reject) => {
      let sql = `select ron.nombre_ronda, ron.puntaje, cat.dificultad, pre.idpregunta, pre.pregunta
      from ronda as ron
      join categoria as cat on cat.ronda_idronda = ron.idronda
      join pregunta as pre on pre.categoria_idcategoria = cat.idcategoria
      where ron.idronda between ${id} and ${id}
      order by rand() limit 1`;
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

module.exports = Respuestas;
