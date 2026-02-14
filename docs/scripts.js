const simulator = {
	barcode: function(command) {
		simulator.image({
			parameter: {
				code: 'EAN13',
				data: command.code,
			},
		})
	},
	image: function(command) {

		const address = `//${'barcode.tec-it.com/barcode.ashx'}?${new URLSearchParams(command.parameter).toString()}`;
		const image = document.body.querySelector('#card>img');
		const loader = document.createElement('img');
		// image.setAttribute('crossorigin', 'anonymous');
		loader.setAttribute('src', address);
		loader.addEventListener('load', function() {
			image.setAttribute('width', loader.width);
			image.setAttribute('height', loader.height);
			image.setAttribute('src', address);
		});
		loader.setAttribute('src', address);
	},
};




document.addEventListener('DOMContentLoaded', function() {
	simulator.barcode({
		code: Array.from([
			2401090558439, // demo
			2402016060104, // demo
			2408775194852, // aral
		]).at(parseInt(Math.random() * 3)),
	})
});