$(document).ready(function(){

	$(window).scroll(function(){
		//alert($(window).scrollTop());
		if($(window).scrollTop() > 280){
			$("#btn-top").css('opacity','1');
			$("#btn-top").css('visibility','visible');
		}else{
			$("#btn-top").css('opacity','0');
			$("#btn-top").css('visibility','hidden');
		}

	});

	$("#btn-top").click(function(){
		$(window).scrollTop(0);
	});
});