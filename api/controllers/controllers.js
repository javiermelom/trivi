// Llamado a la Api
export async function cartoons() {
  let datos = await fetch(`https://rickandmortyapi.com/api/character/`);
  let datosParseados = await datos.json();
  let arrayDeCartoons = []; // Creacion de Array vacio para llenarlo con la info que queremos

  for (let i = 0; i < datosParseados.results.length; i++) {
    const cartoon = datosParseados.results[i];
    let cartoonFormateado = {
      id: cartoon.id,
      nombre: cartoon.name,
      especie: cartoon.species,
      imagen: cartoon.image,
      estado: cartoon.status,
    };
    arrayDeCartoons.push(cartoonFormateado);
  }
  return arrayDeCartoons;
}
// {
//   prev: datosParseados.info.prev,
//   next: datosParseados.info.next,
//   arrayDeCartoons: arrayDeCartoons,
// };


export async function busquedaEspecie(barraEspecie) {
  let resultadoEsp = await fetch(`https://rickandmortyapi.com/api/character/?species=${barraEspecie}`);
  let resultadoEspJson = await resultadoEsp.json();
  let cartoonFormateado = {
    id: resultadoEspJson.id,
    nombre: resultadoEspJson.name,
    especie: resultadoEspJson.species,
    imagen: resultadoEspJson.image,
    estado: resultadoEspJson.status,
  };
  return cartoonFormateado;
}




export async function busquedaNombre(barraNombre) {
  let resultadoNob = await fetch(`https://rickandmortyapi.com/api/character/?name=${barraNombre}`);
  let resultadoNobJson = await resultadoNob.json();
  let cartoonFormateado = {
    id: resultadoNobJson.id,
    nombre: resultadoNobJson.name,
    especie: resultadoNobJson.species,
    imagen: resultadoNobJson.image,
    estado: resultadoNobJson.status,
  };
  return cartoonFormateado;
}