const simulator = {
	barcode: function(command) {
		simulator.image({
			provider: 'barcode.tec-it.com/barcode.ashx',
			section: '#card',
			parameter: {
				data: command.code,
				code: 'EAN13',
			},
		})
	},
	qrcode: function(command) {
		simulator.image({
			provider: 'genqrcode.com/embedded',
			section: '#pay',
			parameter: {
				text: command.code,
				imageformat: 'png',
				background_color: '#FFFFFFFF',
				color: 'FF0000',
				bordersize: 0,
				width: 500,
				height: 500,
			},
		});
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


document.addEventListener('DOMContentLoaded', function() {
	simulator.qrcode({
		code: '989224010905584390036164906591784883046512702842838211301612433891020016615416515525271611162339640155201571077813781111046542065626349766452802631144381802731830912061660828688061876077996438347039552679405367001711839606582546176359921246424520366665421949208817288330482',
	});
});