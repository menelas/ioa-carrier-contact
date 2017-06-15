$(function() {
	$(document).on('click', 'a.add-permission-row', function(e){
		e.preventDefault();
		var appended_row = $('#contact-title-row-container tr:first-child').clone();
		$(appended_row).appendTo('#contact-title-row-container');
	});
	$(document).on('click', 'a.add-contact-department-row', function(e){
		e.preventDefault();
		var appended_row = $('#contact-department-container tr:first-child').clone();
		$(appended_row).appendTo('#contact-department-container');
	});
	$(document).on('click', 'a.add-region-row', function(e){
		e.preventDefault();
		var appended_row = $('#region-container tr:first-child').clone();
		$(appended_row).appendTo('#region-container');
	});
});