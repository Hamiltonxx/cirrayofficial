$(function () {

    $('.modal').modal();
 
	$('.submit').click(function () {
		var number = /^1[0-9]{10}$/;
		if(!number.test($('.mobnum').val())){
			$('.tip').removeClass('unvisible');
		}
		else{
			  M.toast({html: '已收到，客服将尽快给您回电！'})
			$('.tip').addClass('unvisible');
			 
			 
		}	
	})
	
	$('#scroll li').click(function () {
			
			if(this.className =="aa"){
				$('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);

			}	
		else	if(this.className =="ser"){
				
				$('html, body').animate({
            scrollTop: $("#service").offset().top+20
        }, 1000);

			}
				else	if(this.className =="dem"){
				
				$('html, body').animate({
            scrollTop: $("#demon").offset().top-80
        }, 1000);

			}
			else	if(this.className =="about"){
				
				$('html, body').animate({
            scrollTop: $("#about").offset().top-80
        }, 1000);

			}
			else	if(this.className =="pp"){
				
				$('html, body').animate({
            scrollTop: $("#mobile").offset().top
        }, 1000);

			}
			
		  
	})
	$(window).scroll(function(){var a=$(this).scrollTop()
	
			if(a>$("#header").offset().top&&a<$("#service").offset().top){
				for(let i = 0;i<$('#scroll li').length;i++){
				$('#scroll li')[i].classList.remove("active");
			}
				$('.aa').addClass('active')
			}
			if(a>$("#service").offset().top&&a<$("#demon").offset().top-200){
				for(let i = 0;i<$('#scroll li').length;i++){
				$('#scroll li')[i].classList.remove("active");
			}
				$('.ser').addClass('active')
				
			}
			else	if(a>$("#demon").offset().top-200&&a<$("#about").offset().top-200){
					for(let i = 0;i<$('#scroll li').length;i++){
				$('#scroll li')[i].classList.remove("active");
			}
				$('.dem').addClass('active')
			}
			else	if(a>$("#about").offset().top-200&&a<$("#mobile").offset().top){
					for(let i = 0;i<$('#scroll li').length;i++){
				$('#scroll li')[i].classList.remove("active");
			}
				$('.about').addClass('active')
			}
			
	});
	 $('.parallax').parallax();
	 console.log($('body'));

})
