var appliaction = {
	initFancybox: function () {
		if (!$.fancybox)
			return;
		$('.fancybox').fancybox({
			overlayColor: '#000'
		});
		$('.fancybox-iframe').fancybox({
			autoScale: false,
			type: 'iframe',
			width: 1000,
			height: '75%',
			overlayColor: '#000'
		});
	},
	initCufon: function () {
		Cufon.replace('h1, .contact-phone', {fontFamily: 'FranklinGothicMedium', textShadow: '#666 1px 1px'});
		Cufon.replace('h2', {fontFamily: 'FranklinGothicMedium'});

	}
};

$(document).ready(function() {
	appliaction.initCufon();
	appliaction.initFancybox();
});
