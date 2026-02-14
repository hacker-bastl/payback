document.addEventListener('DOMContentLoaded', function() {
	const footer = document.body.querySelector('footer');
	const request = new XMLHttpRequest();
	request.addEventListener('load', function() {
		const partner = JSON.parse(request.responseText);
		const images = partner.sort(function() {
			return Math.random() < 0.5 ? -1 : +1;
		}).slice(0, 5);
		footer.innerHTML = Array.from([
			'<strong>Jetzt Punkte einl&ouml;sen</strong>',
			images.map(function(url) {
				return `<img src="${url}" />`;
			}).join('\n'),
			`<small>Du kannst <strong>${2000}&deg;P</strong> einl&ouml;sen</small>`
		]).join('<br />');
	});
	request.open('GET', 'partner.json');
	request.send(null);
});


document.addEventListener('DOMContentLoaded', function() {
	const header = document.body.querySelector('header');
	const images = Array.from([
		'//www.payback.de/resource/blob/332584/10d8a6396151a42b8387814cbe7f3129/0-payback-karte-img-resdata4.jpg',
		'//assets.payback.de/static/5032b0a7-87c9-4f5f-80f3-f3d81277b7f7--1-head-image-resdata4.webp',
		'//www.payback.de/resource/blob/332600/4bdc84e40ea00350c740853f78546e46/1-amex-img-resdata4.jpg',
		'//www.payback.de/resource/blob/332566/92b1aacf22cfe333393ae94b431bb3d8/compare-visa-img-resdata4.webp',
		'//is.payback.de/banners/408/files/00/31/b2/7d/000003256957.jpg',
		'//assets.payback.de/static/a86d3bea-3557-4430-ab74-2366908d3bb6--13-amex-teaser-img-resdata4.jpg',
	]);
	const address = images.at(parseInt(Math.random() * images.length));
	header.innerHTML = `<img src="${address}" />`;
});

document.addEventListener('DOMContentLoaded', function() {


	const command = {
		provider: 'barcode.tec-it.com/barcode.ashx',
		section: 'barcode',
		parameter: {
			data: 2408775194852,
			code: 'EAN13',
		},
	};

	const address = `//${command.provider}?${new URLSearchParams(command.parameter).toString()}`;
	const parent = document.body.querySelector(`#${command.section}`);
	const image = document.createElement('img');
	image.setAttribute('src', address);
	image.addEventListener('load', function() {
		image.setAttribute('width', image.width);
		image.setAttribute('height', image.height);
		parent.appendChild(image);
	});
	image.setAttribute('src', address);
});

document.addEventListener('DOMContentLoaded', function() {

	const command = {
		provider: 'genqrcode.com/embedded',
		section: 'qr-code',
		parameter: {

			text: 989224010905584390036164906591784883046512702842838211301612433891020016615416515525271611162339640155201571077813781111046542065626349766452802631144381802731830912061660828688061876077996438347039552679405367001711839606582546176359921246424520366665421949208817288330482,

			width: 500,
			height: 500,
			bordersize: 2,
			imageformat: 'svg',

			frame_text: 'SCAN ME',
			language: 'en',

			background_color: '#FFFFFFFF',
			inner_eye_color: '#000000',
			outer_eye_color: '#000000',
			color: 'FF0000',

			frame_text_icon_color: '#000000',
			frame_text_icon: null,
			frame_color: '#000000',
			frame_background_color: '#FFFFFF',
			frame_text_color: '#FFFFFF',

			gradient_style: 0,
			gradient_color_start: '#FF0000',
			gradient_color_end: '#7F007F',
			gradient_start_offset: 5,
			gradient_end_offset: 95,

			invert_colors: false,

			logo_remove_background: null,
			logo: null,

			stl_type: 1,
			stl_size: 100,
			stl_qr_height: 1.5,
			stl_base_height: 2,
			stl_include_stands: false,
			stl_qr_magnet_type: 3,
			stl_qr_magnet_count: 0,

			inner_eye_style: 0,
			outer_eye_style: 0,
			frame_style: 0,
			style: 0,
			type: 0,
		}
	};

	const address = `//${command.provider}?${new URLSearchParams(command.parameter).toString()}`;
	const parent = document.body.querySelector(`#${command.section}`);
	const image = document.createElement('img');
	image.setAttribute('src', address);
	image.addEventListener('load', function() {
		image.setAttribute('width', image.width);
		image.setAttribute('height', image.height);
		parent.appendChild(image);
	});
	image.setAttribute('src', address);
});