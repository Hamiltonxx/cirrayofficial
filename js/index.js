$(function () {
	$('.submit').click(function () {
		var number = /^1[0-9]{10}$/;
		if(!number.test($('.mobnum').val())){
			$('.tip').removeClass('unvisible');
		}
		else{
			$('.tip').addClass('unvisible');
		}
	})
})