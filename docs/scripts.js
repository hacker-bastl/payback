document.addEventListener('DOMContentLoaded', function repeat() {

	const code = Array.from([
		2401090558439, // demo
		2402016060104, // demo
		2408775194852, // aral
	]).at(parseInt(Math.random() * 3));

	const address = `//${'barcode.tec-it.com/barcode.ashx'}?${new URLSearchParams({code:'EAN13',data:code}).toString()}`;
	const image = document.body.querySelector('#card>img');
	const loader = document.createElement('img');
	loader.addEventListener('load', function() {
		image.setAttribute('width', loader.width);
		image.setAttribute('height', loader.height);
		image.setAttribute('src', address);
		setTimeout(repeat, 3 * 1E3);
	});
	loader.addEventListener('error', function() {
		setTimeout(repeat, 7 * 1E3);
	});
	loader.setAttribute('src', address);
	loader.setAttribute('src', address);

});