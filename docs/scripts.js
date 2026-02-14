const simulator = {
	barcode: function(command) {
		simulator.image({
			provider: 'barcode.tec-it.com/barcode.ashx',
			section: '#card',
			parameter: {
				code: 'EAN13',
				data: command.code,
			},
		})
	},
	image: function(command) {
		const address = `//${command.provider}?${new URLSearchParams(command.parameter).toString()}`;
		const parent = document.body.querySelector(command.section);
		const image = document.createElement('img');
		// image.setAttribute('crossorigin', 'anonymous');
		image.setAttribute('src', address);
		image.addEventListener('load', function() {
			image.setAttribute('width', image.width);
			image.setAttribute('height', image.height);
			parent.innerHTML = ``;
			parent.appendChild(image);
		});
		image.setAttribute('src', address);
	},
};




document.addEventListener('DOMContentLoaded', function() {
	var min = 2401090558439;
	var max = 2402016060104;
	simulator.barcode({
		code: Array.from([
			2401090558439, // demo
			2402016060104, // demo
			2408775194852, // aral
		]).at(parseInt(Math.random() * 3)),
	})
});