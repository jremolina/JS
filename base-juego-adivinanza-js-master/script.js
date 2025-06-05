let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroentrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intentos = document.getElementById("intentos");
let numerointentos = 0;

function chequearresultado() {
  numerointentos++;

  let numeroingresado = parseInt(numeroentrada.value);

  if (numeroingresado < 1 || numeroingresado > 100 || isNaN(numeroingresado)) {
    mensaje.textContent = "por favor introducir numero valido";
    intentos.textContent = "numero de intentos " + numerointentos;
    return;
  }
  if (numeroingresado === numeroAzar) {
    mensaje.textContent = "Haz adivinado el numero";
    mensaje.style.color = "green";

    numeroentrada.disabled = true;
    return;
  } else if (numeroingresado < numeroAzar) {
    mensaje.textContent = "Mas alto";
    mensaje.style.color = "red";
    intentos.textContent = "numero de intentos " + numerointentos;
  } else {
    mensaje.textContent = "Mas bajo";
    mensaje.style.color = "red";
    intentos.textContent = "numero de intentos " + numerointentos;
  }
}
