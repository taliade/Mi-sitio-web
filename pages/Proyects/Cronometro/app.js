
//////////////

//Contador  setInternval 
let contador = 0;
let intervalId;

function actualizarContador() {
  contador++;
  document.getElementById('contador').innerHTML = 'Contador: ' + contador;
}

intervalId = setInterval(actualizarContador, 1000); // Actualiza el contador cada segundo

function detenerContador() {
  clearInterval(intervalId);
}

function reiniciarContador() {
  contador = 0;
  document.getElementById('contador').innerHTML = 'Contador: ' + contador;
  clearInterval(intervalId);
  intervalId = setInterval(actualizarContador, 1000);
}