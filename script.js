let clics = 0;
const boton = document.getElementById('contador');
const resultado = document.getElementById('resultado');
boton.addEventListener('click', () => {
  clics += 1;
  resultado.textContent = `Clics registrados: ${clics}`;
});
