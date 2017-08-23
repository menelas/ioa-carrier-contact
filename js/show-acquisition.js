(function($) {
	$('#contact-acquisition').on('click', function(){
		if ( $(this).is(':checked') ){
			$('.acquisition').show();
		}else{
			$('.acquisition').hide();
		}
	});
})(jQuery);