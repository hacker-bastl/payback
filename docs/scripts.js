document.addEventListener('DOMContentLoaded', function repeat() {

	if (location.hash != '#card') return setTimeout(repeat, 3E3);

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

		const random = Math.sin(new Date().getTime() / 2E3) * 0.5 + 0.5;
		const delay = 2E3 + random * 5E3;
		setTimeout(repeat, parseInt(delay));
	});
	loader.addEventListener('error', function() {
		setTimeout(repeat, 7 * 1E3);
	});
	loader.setAttribute('src', address.href);

});

document.addEventListener('ALTERNATIVE', function() {


	const available = Array.from([
		2401090558439, // demo
		2402016060104, // demo
		2408775194852, // aral
	]).map(function(code) {
		const image = new Image();
		image.setAttribute('src', `//barcode.tec-it.com/barcode.ashx?code=EAN13&data=${code}`);
		return image;
	});


	setInterval(function() {

		const selected = available.shift();
		available.push(selected);

		const image = document.body.querySelector('#card>img');
		image.setAttribute('src', selected.getAttribute('src'));


	}, 3E3);

});