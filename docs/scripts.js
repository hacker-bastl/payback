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



addEventListener('hashchange', function() {
	const valid = Array.from(document.body.querySelectorAll('main>section')).map(function(node) {
		const show = `#${node.getAttribute('id')}` == location.hash;
		node.style.display = show ? 'block' : 'none';
		return show;
	});

	if (valid.length < 1)
		location.hash = '#card'
});

document.addEventListener('DOMContentLoaded', function() {
	dispatchEvent(new CustomEvent('hashchange'));
});

document.addEventListener('DOMContentLoaded', function() {
	simulator.barcode({
		code: Array.from([
			2401090558439,
			2402016060104,
			2408775194852
		]).at(parseInt(Math.random() * 3)),
	})
});