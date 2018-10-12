$(function () {

    $('.modal').modal();
 
	$('.submit').click(function () {
		var number = /^1[0-9]{10}$/;
		if(!number.test($('.mobnum').val())){
			$('.tip').removeClass('unvisible');
		}
		else{
			console.log(1)
			$('.tip').addClass('unvisible');
			 $('.modal').modal('open');
		}	
	})

	$('#scroll li').click(function () {
			for(let i = 0;i<$('#scroll li').length;i++){
				$('#scroll li')[i].classList.remove("active");
			}
			if(this.className =="aa"){
				this.classList.add("active");
				$('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);

			}	
		else	if(this.className =="ser"){
				this.classList.add("active");
				$('html, body').animate({
            scrollTop: $("#service").offset().top
        }, 1000);

			}
				else	if(this.className =="dem"){
				this.classList.add("active");
				$('html, body').animate({
            scrollTop: $("#demon").offset().top
        }, 1000);

			}
			else	if(this.className =="about"){
				this.classList.add("active");
				$('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);

			}
			else	if(this.className =="pp"){
				
				$('html, body').animate({
            scrollTop: $("#mobile").offset().top
        }, 1000);

			}
			
		  
	})

})
