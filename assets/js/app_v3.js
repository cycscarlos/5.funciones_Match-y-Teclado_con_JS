window.onload = inicio;
let rotacion = 0;
let sumar = true;

function inicio() {
  document.querySelector(".circulo").onclick = girar;
  actualizarGrados();
}
function girar() {
  // También puede codificarse asi: if (sumar == true){}
  // Incrementamos el valor de la flecha mientras rota a la derecha
  if (sumar) {
    rotacion += 20;
    // De lo contrario disminuimos el valor de la flecha mientras rota a la izquierda
  } else {
    rotacion -= 20;
  }
  // Al llegar a cero, validamos si es menor a cero, debe rotar a la derecha, de lo contrario a la izquierda
  if (rotacion <= 0 || rotacion >= 360) {
    sumar = !sumar;
  }

  document.querySelector(".flecha").style.transform = `rotate(${rotacion}deg)`;
  actualizarGrados();
}
function actualizarGrados() {
  document.querySelector(".porcentaje").innerHTML = `${rotacion}°`;
}
