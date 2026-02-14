document.addEventListener('DOMContentLoaded', function() {
	const request = new XMLHttpRequest();
	request.addEventListener('load', function() {
		document.body.querySelector('footer').innerHTML = JSON.parse(request.responseText).sort(function() {
			return Math.random() < 0.5 ? -1 : +1;
		}).slice(0, 5).map(function(url) {
			return `<img src:'"${url}" />`;
		}).join('\n');
	});
	request.open('GET', 'partner.json');
	request.send(null);
});


document.addEventListener('DOMContentLoaded', function() {
	const parameter = new URLSearchParams({
		data: 2408775194852,
		code: 'EAN13',
	});

	const address = `//barcode.tec-it.com/barcode.ashx?${parameter.toString()}`;
	const parent = document.body.querySelector('main');
	const image = document.createElement('img');
	image.setAttribute('src', address);
	image.addEventListener('load', function() {
		parent.appendChild(image);
	});
	image.setAttribute('src', address);
});

document.addEventListener('DOMContentLoaded', function() {
	const parameter = new URLSearchParams({
		style: 0,
		inner_eye_style: 0,
		outer_eye_style: 0,
		logo: null,
		color: '000000FF',
		background_color: '#FFFFFFFF',
		inner_eye_color: '#000000',
		outer_eye_color: '#000000',
		imageformat: 'svg',
		language: 'en',
		frame_style: 0,
		frame_text: 'SCAN ME',
		frame_text_icon_color: '#000000',
		frame_text_icon: null,
		frame_color: '#000000',
		frame_background_color: '#FFFFFF',
		frame_text_color: '#FFFFFF',
		invert_colors: false,
		gradient_style: 0,
		gradient_color_start: '#FF0000',
		gradient_color_end: '#7F007F',
		gradient_start_offset: 5,
		gradient_end_offset: 95,
		stl_type: 1,
		logo_remove_background: null,
		stl_size: 100,
		stl_qr_height: 1.5,
		stl_base_height: 2,
		stl_include_stands: false,
		stl_qr_magnet_type: 3,
		stl_qr_magnet_count: 0,
		type: 0,
		width: 500,
		height: 500,
		bordersize: 2,
		text: '989224010905584390036164906591784883046512702842838211301612433891020016615416515525271611162339640155201571077813781111046542065626349766452802631144381802731830912061660828688061876077996438347039552679405367001711839606582546176359921246424520366665421949208817288330482'
	});
	const address = `//genqrcode.com/embedded?${parameter.toString()}`;
	const parent = document.body.querySelector('main');
	const image = document.createElement('img');
	image.setAttribute('src', address);
	image.addEventListener('load', function() {
		parent.appendChild(image);
	});
	image.setAttribute('src', address);
});