window.onload = init;

function init() {
	const horas = document.getElementById('horas');
	const minutos = document.getElementById('minutos');
	const segundos = document.getElementById('segundos');

	const relogio = setInterval(function time() {
		let dateToday = new Date();
		let hr = String(dateToday.getHours()).padStart(2, '0');
		let min = String(dateToday.getMinutes()).padStart(2, '0');
		let sec = String(dateToday.getSeconds()).padStart(2, '0');

		horas.textContent = hr;
		minutos.textContent = min;
		segundos.textContent = sec;
	});
}
