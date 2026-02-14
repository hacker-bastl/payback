document.addEventListener('DOMContentLoaded', function repeat() {

	const image = document.body.querySelector('#card>img');
	const address = new URL(`${location.protocol}//${image.getAttribute('src').split('//').pop()}`);
	const current = parseInt(address.searchParams.get('data'));

	const codes = Array.from([
		2401090558439, // demo
		2402016060104, // demo
		2408775194852, // aral
	]).filter(function(entry) {
		return entry != current;
	});

	address.searchParams.set('data', codes.at(parseInt(Math.random() * codes.length)));

	const loader = document.createElement('img');
	loader.addEventListener('load', function() {
		image.setAttribute('width', loader.width);
		image.setAttribute('height', loader.height);
		image.setAttribute('src', address.href);

		const delay = Math.sin(new Date().getTime() / 2E3) * 0.5 + 0.5;
		const seconds = 1 + del;
		ay * 3;
		setTimeout(repeat, parseInt(seconds * 1E3));
	});
	loader.addEventListener('error', function() {
		setTimeout(repeat, 7 * 1E3);
	});
	loader.setAttribute('src', address.href);
	console.log(address.href);

});