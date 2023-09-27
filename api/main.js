import { busquedaEspecie, cartoons } from "./controllers/controllers.js";

let root = document.getElementById("root");
let botonDeBusqueda = document.getElementById("buscar");
let barraEspecie = document.getElementById("busquedaEspecie");
let barraNombre = document.getElementById("busquedaNombre");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = "";
let nextUrl = "";

async function mostrarCartoons() {
  let objetoCartoon = await cartoons();
  // previousUrl = objetoCartoon.info.prev;
  // nextUrl = objetoCartoon.info.next;

  let html = "";
  objetoCartoon.forEach((cadaCartoon) => {
    let cardCartoon = `<div class="card">
      <span class="letra">${cadaCartoon.nombre}</span>
      <span class="letra">${cadaCartoon.id}</span>
      <span class="letra">${cadaCartoon.especie}</span>
      <img class="img" src="${cadaCartoon.imagen}"/>
      <sapn class="letra">${cadaCartoon.estado}</span>
    </div>`;
    html += cardCartoon;
  });
  root.innerHTML = html;
}



botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault;
  let especieBuscada = await busquedaEspecie(barraEspecie.value);
  let cardCartoon = `<div class="card">
                      <span>${especieBuscada.nombre}</span>
                      <span>${especieBuscada.id}</span>
                      <span>${especieBuscada.estado}</span>
                      <img class="card_image" src='${especieBuscada.imagen}'/>
                     </div>`;
  root.innerHTML = cardCartoon;
});





botonDeBusqueda.addEventListener("click", async function (event) {
  event.preventDefault;
  let nombreBuscado = await busquedaNombre(barraNombre.value);
  let cardCartoon = `<div class="card">
                      <span>${nombreBuscado.nombre}</span>
                      <span>${nombreBuscado.id}</span>
                      <span>${nombreBuscado.estado}</span>
                      <img class="card_image" src='${nombreBuscado.imagen}'/>
                     </div>`;
  root.innerHTML = cardCartoon;
});




// previousBtn.addEventListener("click", async () => {
//   mostrarCartoons(previousUrl);
// });

// nextBtn.addEventListener("click", async () => {
//   mostrarCartoons(nextUrl);
// });

mostrarCartoons();