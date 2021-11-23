
const btnToggle = document.querySelector('.icono');

btnToggle.addEventListener('click', function () {
  console.log('click')
  document.getElementById('menulateral').classList.toggle('activacion');
  console.log(document.getElementById('menulateral'));
}); 
