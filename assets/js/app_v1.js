window.onload = inicio;
let rotacion = 0;
let sumar = true;

function inicio() {
  document.querySelector(".circulo").onclick = girar;
  actualizarGrados();
}
function girar() {
  // Incrementamos el valor de la flecha para que vaya rotando
  rotacion += 20;
  document.querySelector(".flecha").style.transform = `rotate(${rotacion}deg)`;

  if (rotacion >= 360) {
    rotacion = 0;
  }
  actualizarGrados();
}
function actualizarGrados() {
  document.querySelector(".porcentaje").innerHTML = `${rotacion}°`;
}
