// Llamado a la Api
export async function cartoons(url) {
  let datos = await fetch(url || `https://rickandmortyapi.com/api/character/`);
  let datosParseados = await datos.json();
  let arrayDeCartoons = []; // Creacion de Array vacio para llenarlo con la info que queremos

  for (let i = 0; i < datosParseados.results.length; i++) {
    const cartoon = datosParseados.results[i];
    let cartoonDatos = await fetch(cartoon);
    let cartoonParseados = await cartoonDatos.json();

    let cartoonFormateado = {
      id: cartoonParseados.id,
      nombre: cartoonParseados.name,
      especie: cartoonParseados.species,
      imagen: cartoonParseados.image,
    };
    console.log(cartoonFormateado);
    arrayDeCartoons.push(cartoonFormateado);
  }
  return arrayDeCartoons;
}