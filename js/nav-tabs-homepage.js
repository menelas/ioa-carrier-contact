$(function () {
	function activaTab(tabID){
		$('.nav-tabs a[href="' + tabID + '"]').tab('show');
	}
	var hashUrl = location.hash;
	activaTab(hashUrl);
});
