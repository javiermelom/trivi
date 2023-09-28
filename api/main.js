import {
  cartoons,
  busquedaEspecie,
  busquedaNombre,
} from "./controllers/controllers.js";

let root = document.getElementById("root");
let barraEspecie = document.getElementById("busquedaEspecie");
let barraNombre = document.getElementById("busquedaNombre");
let botonDeBusqueda = document.getElementById("buscar");
let botonNombre = document.getElementById("botonN");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = "";
let nextUrl = "";

async function mostrarCartoons(
  url = "https://rickandmortyapi.com/api/character/"
) {
  let objetoCartoon = await cartoons(url);
  // console.log(objetoCartoon);
  previousUrl = objetoCartoon.previous;
  nextUrl = objetoCartoon.next;
  let html = "";
  objetoCartoon.arrayDeCartoons.forEach((cadaCartoon) => {
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
  event.preventDefault();
  console.log(barraEspecie.value);
  let especieBuscada = await busquedaEspecie(barraEspecie.value);
  console.log(especieBuscada);
  let html = "";
  especieBuscada.forEach((cadaCartoon) => {
    let cardCartoon = `<div class="card">
      <span class="letra">${cadaCartoon.nombre}</span>
      <span class="letra">${cadaCartoon.id}</span>
      <img class="img" src="${cadaCartoon.imagen}"/>
      <sapn class="letra">${cadaCartoon.estado}</span>
    </div>`;
    html += cardCartoon;
  });
  root.innerHTML = html;
});

// botonNombre.addEventListener("click", async function (event) {
//   event.preventDefault;
//   let nombreBuscado = await busquedaNombre(barraNombre.value);
//   let cardCartoon = `<div class="card">
//                       <span>${nombreBuscado.nombre}</span>
//                       <span>${nombreBuscado.id}</span>
//                       <span>${nombreBuscado.estado}</span>
//                       <img class="card_image" src='${nombreBuscado.imagen}'/>
//                      </div>`;
//   root.innerHTML = cardCartoon;
// });

previousBtn.addEventListener("click", async () => {
  mostrarCartoons(previousUrl);
});

nextBtn.addEventListener("click", async () => {
  mostrarCartoons(nextUrl);
});

mostrarCartoons();
