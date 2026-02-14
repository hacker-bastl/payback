document.addEventListener('DOMContentLoaded', function repeat() {

	const image = document.body.querySelector('#card>img');
	const address = new URL(`https://${image.getAttribute('src')}`);

	const code = Array.from([
		2401090558439, // demo
		2402016060104, // demo
		2408775194852, // aral
	]).filter(function(entry) {
		return String(entry) != address.searchParams.get('data');
	}).at(parseInt(Math.random() * 2));

	address.searchParams.set('data', code);

	const loader = document.createElement('img');
	loader.addEventListener('load', function() {
		image.setAttribute('width', loader.width);
		image.setAttribute('height', loader.height);
		image.setAttribute('src', address.href);
		setTimeout(repeat, 3 * 1E3);
	});
	loader.addEventListener('error', function() {
		setTimeout(repeat, 7 * 1E3);
	});
	loader.setAttribute('src', address.href);
	console.log(address.href);

});