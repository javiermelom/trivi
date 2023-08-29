import { cartoons } from "./controllers/controllers.js";

let root = document.getElementById("root");
let botonDeBusqueda = document.getElementById("buscarEspecie");
let barraDeBusqueda = document.getElementById("busquedaEspecie");
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let previousUrl = "";
let nextUrl = "";

async function mostrarCartoons(url) {
  let objetoCartoon = await cartoons(url);
  let html = "";
  objetoCartoon.arrayDeCartoons.forEach((cadaCartoon) => {
    let cardCartoon = `<div class="card">
      <span>${cadaCartoon.nombre}</span>
      <span>${cadaCartoon.id}</span>
      <span>${cadaCartoon.especie}</span>
      <img src="${cadaCartoon.imagen}"/>
    </div>`;
    console.log(cadaCartoon);
    html += cardCartoon;
  });
  root.innerHTML = html;
}

mostrarCartoons();

// previousBtn.addEventListener("click", async () => {
//   mostrarCartoons(previousUrl);
// });
// nextBtn.addEventListener("click", async () => {
//   mostrarCartoons(nextUrl);
// });
