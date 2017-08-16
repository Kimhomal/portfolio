$(document).ready(function() {

	$('.masthead')
		.visibility({
			once: false,
			onBottomPassed: function() {
				$('.fixed.menu').transition('fade in');
			},
			onBottomPassedReverse: function() {
				$('.fixed.menu').transition('fade out');
			}
		})
	;
	
	$('.ui.sidebar')
		.sidebar('setting', 'transition', 'thin overlay')
		.sidebar('attach events', '.toc.item')
	;
});